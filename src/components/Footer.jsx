import { Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-ink-soft mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">

        {/* Top content */}
        <div className="grid gap-8 md:grid-cols-3 text-center ">

          {/* Brand / Summary */}
          <div className="max-w-sm mx-auto text-center">
            <h2 className="text-md text-md font-semibold uppercase tracking-wide text-footer-ink-muted mb-2">
              Δημήτρης Μιχούδης
            </h2>
            <p className="text-sm leading-relaxed">
              Ψυχολόγος στη Θεσσαλονίκη — παροχή ατομικής θεραπείας με σεβασμό,
              εμπιστοσύνη και επιστημονική τεκμηρίωση.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center ">
            <h4 className="text-md font-semibold uppercase tracking-wide text-footer-ink-muted mb-4">
              Επικοινωνία
            </h4>
            <ul className="space-y-1 text-sm text-center">
              <li className="flex items-center justify-center gap-3 mb-2">
                <a
                  href="mailto:dimitrismichoudis@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mail"
                  className="hover:text-footer-ink transition"
                >
                  <Mail size={22} strokeWidth={1.5}/>
                </a>
                <a
                  href="https://www.instagram.com/dimitris_michoudis?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-footer-ink transition"
                >
                  <Instagram size={22} strokeWidth={1.5} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61587063455977"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-footer-ink transition "
                >
                  <Facebook size={22} strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a
                  href="tel:+302311829090"
                  className="hover:text-footer-ink underline-offset-2 hover:underline"
                >
                  231 182 9090
                </a>
              </li>
              <li className="text-xs">
                Θεσσαλονίκη, Ελλάδα
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold uppercase tracking-wide text-footer-ink-muted mb-4">
              Σύνδεσμοι
            </h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#about" className="hover:text-footer-ink hover:underline">Σχετικά</a></li>
              <li><a href="#services" className="hover:text-footer-ink hover:underline">Υπηρεσίες</a></li>
              <li><a href="#contact" className="hover:text-footer-ink hover:underline">Επικοινωνία</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-4 border-t border-white/10 text-xs text-center text-footer-ink-muted">
          © {new Date().getFullYear()} Δημήτρης Μιχούδης — Με επιφύλαξη παντός δικαιώματος.
        </div>
      </div>
    </footer>
  );
}