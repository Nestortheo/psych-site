export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-ink-soft mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">

        {/* Top content */}
        <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">

          {/* Brand / Summary */}
          <div>
            <h3 className="text-base font-semibold text-footer-ink mb-2">
              Δημήτρης Μιχούδης
            </h3>
            <p className="text-sm leading-relaxed">
              Ψυχολόγος στη Θεσσαλονίκη — παροχή ατομικής θεραπείας με σεβασμό,
              εμπιστοσύνη και επιστημονική τεκμηρίωση.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-footer-ink-muted mb-2">
              Επικοινωνία
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="mailto:dimitrismichoudis@gmail.com"
                  className="hover:text-footer-ink underline-offset-2 hover:underline"
                >
                  dimitrismichoudis@gmail.com
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
              <li>Θεσσαλονίκη, Ελλάδα</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-footer-ink-muted mb-2">
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