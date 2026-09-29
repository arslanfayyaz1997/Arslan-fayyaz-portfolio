import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("invalid");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus("invalid");
      return;
    }

    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!service || !template || !key) {
      setStatus("config");
      return;
    }

    try {
      setStatus("sending");
      await emailjs.send(service, template, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "Portfolio contact",
        message: form.message,
        to_email: "arslanfayyaz1997@gmail.com"
      }, { publicKey: key });
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  const message = {
    invalid: "Please enter a valid name, email and message.",
    config: "Contact delivery is not configured yet. Add the EmailJS environment keys from the README.",
    error: "Something went wrong while sending. Please try again.",
    success: "Message sent successfully. Thank you for reaching out."
  }[status];

  return (
    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <p className="text-sm leading-7 text-white/55">
          Have an idea, collaboration, project or opportunity? Send a message.
          The form is designed to validate the input before attempting delivery.
        </p>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-white/35">Direct email</p>
          <a href="mailto:arslanfayyaz1997@gmail.com" className="mt-2 block break-all font-display text-lg hover:text-cyan-300">
            arslanfayyaz1997@gmail.com
          </a>
        </div>
      </div>

      <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-7">
        <div className="grid gap-4 md:grid-cols-2">
          <input name="name" value={form.name} onChange={update} placeholder="Your name" className="field" />
          <input name="email" value={form.email} onChange={update} placeholder="Email address" type="email" className="field" />
        </div>
        <input name="subject" value={form.subject} onChange={update} placeholder="Subject (optional)" className="field mt-4" />
        <textarea name="message" value={form.message} onChange={update} placeholder="Tell me what you want to build..." rows="6" className="field mt-4 resize-none" />

        {status !== "idle" && status !== "sending" && (
          <div className={`mt-4 flex gap-2 rounded-2xl border p-4 text-xs ${status === "success" ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-200" : "border-amber-400/20 bg-amber-400/5 text-amber-200"}`}>
            {status === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            {message}
          </div>
        )}

        <button disabled={status === "sending"} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] disabled:opacity-60">
          {status === "sending" ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}