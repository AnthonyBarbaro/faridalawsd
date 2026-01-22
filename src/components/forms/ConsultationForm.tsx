"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().min(10, "Please add a short message."),
  website: z.string().optional(), // honeypot
});

type Values = z.infer<typeof schema>;

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: Values) => {
    if (values.website && values.website.trim()) return;

    try {
      setStatus("sending");

      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      } else {
        console.log("Consultation form payload:", values);
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

      <div>
        <label className="block text-sm font-medium text-neutral-900">
          Full Name
        </label>
        <input
          {...register("fullName")}
          className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Email
          </label>
          <input
            {...register("email")}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
            placeholder="you@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Phone
          </label>
          <input
            {...register("phone")}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
            placeholder="(619) 555-1234"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
          placeholder="Briefly describe how we can help you"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-neutral-500">
          Submitting this form does not create an attorney–client relationship.
        </p>

        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit Request"}
        </Button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-green-700">
          Thank you — your request has been submitted.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}

      {!process.env.NEXT_PUBLIC_CONTACT_ENDPOINT && (
        <p className="text-xs text-neutral-400">
          Form is in demo mode. Set <code>NEXT_PUBLIC_CONTACT_ENDPOINT</code> to enable email delivery.
        </p>
      )}
    </form>
  );
}
