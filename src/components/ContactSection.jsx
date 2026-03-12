import { useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-[#dcdcd7] bg-surface/55 p-6 shadow-sm sm:p-8">
      {/* Header + Details (always visible) */}
      <div className="grid gap-6 grid-cols md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <h2 className="text-4xl font-semibold text-ink">
            Επικοινωνία
          </h2>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            Μπορείτε να επικοινωνήσετε τηλεφωνικά ή μέσω email. Αν προτιμάτε, στείλτε μήνυμα μέσω της φόρμας.
          </p>

          <div className="mt-5 space-y-2 text-sm text-slate-800">
            <div className="flex items-start gap-3">
              <span className="font-medium text-slate-900">Τηλέφωνο:</span>
              <a href="tel:2311829090" className="hover:underline underline-offset-2">
                231 182 9090
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-slate-900">Email:</span>
              <a href="mailto:dimitrismichoudis@gmail.com" className="hover:underline underline-offset-2">
                dimitrismichoudis@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-slate-900">Περιοχή:</span>
              <span>Κομνηνών 23, Θεσσαλονίκη 54624</span>
            </div>
            <div className="pt-2 text-xs text-slate-600 italic">
              Διαθέσιμες συνεδρίες: online & δια ζώσης
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="tel:2311829090"
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl border border-black/20 px-4 py-2.5 text-sm font-medium text-ink hover:bg-white/60"
          >
            Call
          </a>

          <a
            href="mailto:dimitrismichoudis@gmail.com"
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl border border-black/20 px-4 py-2.5 text-sm font-medium text-ink hover:bg-white/60"
          >
            Email
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl bg-ink-strong hover:opacity-90 px-4 py-2.5 text-sm font-medium text-white "
            aria-expanded={open}
            aria-controls="contact-form"
          >
            {open ? "Κλείσιμο" : "Στείλε μήνυμα μέσω φόρμας"}
          </button>
        </div>
      </div>

      {/* Expandable form */}
      {open && (
        <div id="contact-form" className="mt-10 pt-10 border-t border-black/10">
          <ContactForm compact />
        </div>
      )}
    </div>
  );
}
