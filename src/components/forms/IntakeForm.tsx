"use client";

import { useId, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/* ------------------ Helpers ------------------ */
function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function generateCaptcha() {
  const a = Math.floor(Math.random() * 8) + 2; // 2..9
  const b = Math.floor(Math.random() * 8) + 2; // 2..9
  return {
    a,
    b,
    question: `What is ${a} + ${b}?`,
    answer: String(a + b),
  };
}

const EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "outlook.com"] as const;

function applyEmailDomain(current: string, domain: string) {
  const trimmed = current.trim();
  if (!trimmed) return trimmed;

  const [local] = trimmed.split("@");
  if (!local) return trimmed;

  return `${local}@${domain}`;
}

/* ------------------ Constants ------------------ */
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

/* ------------------ Schema ------------------ */
const schema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  phone: z.string().min(14, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email."),
  caseType: z.enum(PI_CASE_TYPES, { message: "Please select an injury type." }),
  incidentDate: z.string().optional(),
  message: z.string().min(20, "Please add more details (20+ characters)."),
  captchaAnswer: z.string().min(1, "Please answer the question."),
  website: z.string().optional(), // honeypot
});

type Values = z.infer<typeof schema>;
type Status = "idle" | "sending" | "sent" | "error";

/* ------------------ API helper ------------------ */
async function postJson(endpoint: string, payload: unknown) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(text || `Request failed (${res.status})`);
  }

  return text;
}

/* ================== COMPONENT ================== */
export default function IntakeForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [captcha, setCaptcha] = useState(() => generateCaptcha());

  const INTAKE_ENDPOINT = process.env.NEXT_PUBLIC_INTAKE_ENDPOINT;

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
    setValue,
    setError,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      caseType: "Car Accident",
      incidentDate: "",
      message: "",
      captchaAnswer: "",
      website: "",
    },
  });

  const phoneValue = watch("phone");
  const emailValue = watch("email");

  /* ------------------ Submit ------------------ */
  const onSubmit = async (values: Values) => {
    if (values.website && values.website.trim()) return;

    // Captcha check (client-side)
    if (values.captchaAnswer.trim() !== captcha.answer) {
      setError("captchaAnswer", {
        type: "manual",
        message: "Incorrect answer. Please try again.",
      });
      setCaptcha(generateCaptcha());
      return;
    }

    try {
      setStatus("sending");
      setErrorMsg("");

      if (!INTAKE_ENDPOINT) throw new Error("INTAKE_ENDPOINT_NOT_SET");

      const { website, ...safeValues } = values;

      await postJson(INTAKE_ENDPOINT, {
        type: "client_intake",
        ...safeValues,
        incidentDate: safeValues.incidentDate?.trim() ? safeValues.incidentDate : undefined,
        // send captcha proof
        captchaAnswer: safeValues.captchaAnswer.trim(),
        captchaExpected: captcha.answer,
        submittedAt: new Date().toISOString(),
        source: "faridalawsd.com",
        page: "client-intake",
      });

      setStatus("sent");
      reset();
      setCaptcha(generateCaptcha());
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Submission failed. Please try again or contact us.");
      setCaptcha(generateCaptcha());
    }
  };

  /* ------------------ Styles ------------------ */
  const inputBase =
    "mt-2 w-full rounded-xl border border-white/12 bg-black/25 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-gold/70 focus:ring-1 focus:ring-gold/40";
  const labelBase = "block text-sm font-medium text-white/85";
  const errorBase = "mt-1 text-xs text-red-300";
  const chip =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs transition whitespace-nowrap";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-white/12 bg-white/10 p-8 backdrop-blur shadow-card space-y-6"
    >
      {/* honeypot */}
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />

      {/* Name + Case Type */}
      <div className="grid gap-4 sm:grid-cols-2">
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

        <div>
          <label htmlFor={`${id}-caseType`} className={labelBase}>
            Injury Type
          </label>
          <select
            id={`${id}-caseType`}
            {...register("caseType")}
            className={inputBase}
            aria-invalid={!!errors.caseType}
          >
            {PI_CASE_TYPES.map((t) => (
              <option key={t} value={t} className="text-black">
                {t}
              </option>
            ))}
          </select>
          {errors.caseType && <p className={errorBase}>{errors.caseType.message}</p>}
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-phone`} className={labelBase}>
            Phone
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            value={phoneValue || ""}
            onChange={(e) =>
              setValue("phone", formatPhone(e.target.value), {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={inputBase}
            placeholder="(619) 555-1234"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorBase}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor={`${id}-email`} className={labelBase}>
            Email
          </label>
          <input
            id={`${id}-email`}
            {...register("email")}
            type="email"
            className={inputBase}
            placeholder="you@email.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
          />

          {/* Quick domain buttons */}
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-xs text-white/55 mr-1">Quick domain:</span>
            {EMAIL_DOMAINS.map((d) => (
              <button
                key={d}
                type="button"
                className={`${chip} border-white/12 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}
                onClick={() => {
                  const next = applyEmailDomain(emailValue || "", d);
                  setValue("email", next, { shouldValidate: true, shouldDirty: true });
                }}
              >
                @{d}
              </button>
            ))}
          </div>

          {errors.email && <p className={errorBase}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Date */}
      <div>
        <label htmlFor={`${id}-incidentDate`} className={labelBase}>
          Date of Incident (optional)
        </label>
        <input
          id={`${id}-incidentDate`}
          type="date"
          {...register("incidentDate")}
          className={inputBase}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor={`${id}-message`} className={labelBase}>
          Details
        </label>
        <textarea
          id={`${id}-message`}
          {...register("message")}
          rows={6}
          className={inputBase}
          placeholder="What happened, injuries, treatment, insurance info (avoid confidential details)."
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className={errorBase}>{errors.message.message}</p>}
      </div>

      {/* CAPTCHA */}
      <div>
        <label htmlFor={`${id}-captcha`} className={labelBase}>
          Anti-spam: {captcha.question}
        </label>
        <input
          id={`${id}-captcha`}
          {...register("captchaAnswer")}
          className={inputBase}
          placeholder="Your answer"
          inputMode="numeric"
          aria-invalid={!!errors.captchaAnswer}
        />
        {errors.captchaAnswer && <p className={errorBase}>{errors.captchaAnswer.message}</p>}
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/60 max-w-md">
          This intake form does not create an attorney–client relationship.
        </p>

        <Button type="submit" size="lg" disabled={status === "sending" || isSubmitting}>
          {status === "sending" ? "Submitting..." : "Submit Intake"}
        </Button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-emerald-200" aria-live="polite">
          Thank you — your intake has been submitted.
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
