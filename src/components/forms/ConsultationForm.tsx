"use client";

import { useId, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const PI_CASE_TYPES = [
  "Car Accident",
  "Motorcycle Accident",
  "Truck / Commercial Vehicle",
  "Pedestrian / Bicycle Accident",
  "Slip & Fall / Premises Liability",
  "Dog Bite",
  "Wrongful Death",
  "Other Injury",
] as const;

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  // Optional: quick triage
  caseType: z.string().optional(),
  message: z.string().min(10, "Please add a short message."),
  website: z.string().optional(), // honeypot
});

type Values = z.infer<typeof schema>;
type Status = "idle" | "sending" | "sent" | "error";

async function postJson(endpoint: string, payload: unknown) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // Try to read body for debugging / nicer errors
  const text = await res.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    throw new Error(`Request failed (${res.status}). ${typeof data === "string" ? data : ""}`);
  }

  return data;
}

export default function ConsultationForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const office = useMemo(
    () => ({
      phoneDisplay: site.contact.phoneDisplay,
      phoneE164: site.contact.phoneE164,
      email: site.contact.email,
    }),
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      caseType: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: Values) => {
    // Honeypot spam protection
    if (values.website && values.website.trim()) return;

    try {
      setStatus("sending");
      setErrorMsg("");

      if (!CONTACT_ENDPOINT) {
        // No demo mode — treat as config issue + show fallback contact
        throw new Error("CONTACT_ENDPOINT_NOT_CONFIGURED");
      }

      const { website, ...safeValues } = values;

      // Don’t send empty optional fields
      const payload = {
        type: "contact",
        fullName: safeValues.fullName,
        email: safeValues.email,
        phone: safeValues.phone,
        caseType: safeValues.caseType?.trim() ? safeValues.caseType : undefined,
        message: safeValues.message,
        submittedAt: new Date().toISOString(),
        source: "faridalawsd.com",
        page: "consultation-request",
      };

      await postJson(CONTACT_ENDPOINT, payload);

      setStatus("sent");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        "We couldn’t submit your request right now. Please try again — or call/email us below."
      );
    }
  };

  const inputBase =
    "mt-2 w-full rounded-xl border border-white/12 bg-black/25 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-gold/70 focus:ring-1 focus:ring-gold/40 disabled:opacity-60";
  const labelBase = "block text-sm font-medium text-white/85";
  const errorBase = "mt-1 text-xs text-red-300";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-white/12 bg-white/10 p-8 backdrop-blur shadow-card space-y-6"
    >
      {/* honeypot */}
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />

      <div>
        <label htmlFor={`${id}-fullName`} className={labelBase}>
          Full Name
        </label>
        <input
          id={`${id}-fullName`}
          {...register("fullName")}
          className={inputBase}
          placeholder="Your full name"
          autoComplete="name"
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && <p className={errorBase}>{errors.fullName.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-email`} className={labelBase}>
            Email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            {...register("email")}
            className={inputBase}
            placeholder="you@email.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errorBase}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className={labelBase}>
            Phone
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            {...register("phone")}
            className={inputBase}
            placeholder="(619) 555-1234"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorBase}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-caseType`} className={labelBase}>
          Injury Type (optional)
        </label>
        <select
          id={`${id}-caseType`}
          {...register("caseType")}
          className={inputBase}
          aria-invalid={!!errors.caseType}
        >
          <option value="">Select one…</option>
          {PI_CASE_TYPES.map((t) => (
            <option key={t} value={t} className="text-black">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelBase}>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          {...register("message")}
          rows={5}
          className={inputBase}
          placeholder="Briefly describe what happened (avoid confidential details)."
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className={errorBase}>{errors.message.message}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/60 max-w-md">
          Submitting this form does not create an attorney–client relationship.
        </p>

        <Button type="submit" size="lg" disabled={status === "sending" || isSubmitting}>
          {status === "sending" ? "Sending..." : "Submit Request"}
        </Button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-emerald-200" aria-live="polite">
          Thank you — your request has been submitted.
        </p>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
          <p className="text-sm text-red-200">{errorMsg}</p>
          <p className="mt-2 text-sm text-white/75">
            Call{" "}
            <a className="text-sky-200 hover:text-sky-100" href={`tel:${office.phoneE164}`}>
              {office.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a className="text-sky-200 hover:text-sky-100" href={`mailto:${office.email}`}>
              {office.email}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
