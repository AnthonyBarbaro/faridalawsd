"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email."),
  caseType: z.string().min(1, "Please select a case type."),
  message: z.string().min(20, "Please add more details (20+ characters)."),
  website: z.string().optional(), // honeypot
});

type Values = z.infer<typeof schema>;

async function postJson(endpoint: string, payload: unknown) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
}

export default function IntakeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      caseType: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: Values) => {
    if (values.website && values.website.trim()) return;

    try {
      setStatus("sending");

      const endpoint = process.env.NEXT_PUBLIC_INTAKE_ENDPOINT;

      if (endpoint) {
        await postJson(endpoint, {
          type: "client_intake",
          ...values,
          submittedAt: new Date().toISOString(),
          source: "faridalawsd_site",
        });
      } else {
        console.log("Intake payload (demo mode):", values);
      }

      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-8 shadow-card space-y-6"
    >
      {/* honeypot */}
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />

      {/* Name + Case Type */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Full Name
          </label>
          <input
            {...register("fullName")}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Case Type
          </label>
          <select
            {...register("caseType")}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
          >
            <option value="">Select one…</option>
            <option value="Immigration">Immigration</option>
            <option value="Family Law">Family Law</option>
            <option value="Estate Planning">Estate Planning</option>
            <option value="Business & Contracts">Business & Contracts</option>
            <option value="Other">Other</option>
          </select>
          {errors.caseType && (
            <p className="mt-1 text-xs text-red-600">{errors.caseType.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Phone
          </label>
          <input
            {...register("phone")}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
            placeholder="(619) 555-1234"
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Email
          </label>
          <input
            {...register("email")}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
            placeholder="you@email.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-neutral-900">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={6}
          className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
          placeholder="Timeline, key details, goals (avoid confidential information)."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-neutral-500">
          This intake form is for initial review only.
        </p>

        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Submitting..." : "Submit Intake"}
        </Button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-green-700">
          Thank you — your intake has been submitted.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}

      {!process.env.NEXT_PUBLIC_INTAKE_ENDPOINT && (
        <p className="text-xs text-neutral-400">
          Demo mode. Set <code>NEXT_PUBLIC_INTAKE_ENDPOINT</code> to enable submissions.
        </p>
      )}
    </form>
  );
}
