import { useState } from "react";
import ContactForm from "./ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-[#dcdcd7] bg-surface/55 p-6 shadow-sm sm:p-8">

      {/* Heading */}
      <div className="text-center">

        <p className="text-sm tracking-[0.2em] uppercase text-[#b8a692]">
          ΕΠΙΚΟΙΝΩΝΙΑ
        </p>

        <div className="mt-4 h-[2px] w-12 bg-[#b8a692] mx-auto" />

        <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-ink">
          Τρόποι Επικοινωνίας
        </h2>

        <p className="mt-6 text-ink-soft max-w-2xl mx-auto leading-relaxed">
          Επιλέξτε τον τρόπο επικοινωνίας που σας εξυπηρετεί και θα λάβετε απάντηση το συντομότερο δυνατό.
        </p>

    </div>

      {/* Action cards */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">

        <a
          href="tel:2311829090"
          className="
            rounded-2xl border border-[#dcdcd7]
            p-6 text-center
            hover:shadow-md
            transition
          "
        >
          <Phone
            size={28}
            className="mx-auto mb-4 text-[#b8a692]"
          />

          <h3 className="font-semibold">
            Κάλεσε τώρα
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            231 182 9090
          </p>
        </a>

        <a
          href="mailto:dimitrismichoudis@gmail.com"
          className="
            rounded-2xl border border-[#dcdcd7]
            p-6 text-center
            hover:shadow-md
            transition
          "
        >
          <Mail
            size={28}
            className="mx-auto mb-4 text-[#b8a692]"
          />

          <h3 className="font-semibold">
            Στείλε email
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            dimitrismichoudis@gmail.com
          </p>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="
            rounded-2xl border border-[#dcdcd7]
            p-6 text-center
            hover:shadow-md
            transition
          "
        >
          <MessageSquare
            size={28}
            className="mx-auto mb-4 text-[#b8a692]"
          />

          <h3 className="font-semibold">
            {open ? "Κλείσιμο φόρμας" : "Στείλε μήνυμα"}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Απαντώ το συντομότερο δυνατό.
          </p>
        </button>

      </div>

      {/* Details */}
      <div className="mt-10 border-t border-black/10 pt-8">

        <div className="flex flex-col gap-4 text-sm">

          <div className="flex items-center gap-3">
            <Phone size={18} className="text-[#b8a692]" />
            <span>231 182 9090</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={18} className="text-[#b8a692]" />
            <span>dimitrismichoudis@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-[#b8a692]" />
            <span>Κομνηνών 23, Θεσσαλονίκη 54624</span>
          </div>

          <div className="text-slate-600 italic pt-2">
            Διαθέσιμες συνεδρίες: online & δια ζώσης
          </div>

        </div>

      </div>

      {open && (
        <div
          id="contact-form"
          className="mt-10 pt-10 border-t border-black/10"
        >
          <ContactForm compact />
        </div>
      )}

    </div>
  );
}
