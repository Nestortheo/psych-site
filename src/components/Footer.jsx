export default function Footer() {
return (
    <footer className="bg-slate-900 text-slate-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand / Summary */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Δημήτρης Μιχούδης
            </h3>
            <p className="text-sm text-slate-400">
              Ψυχολόγος στη Θεσσαλονίκη — παροχή ατομικής θεραπείας με σεβασμό, εμπιστοσύνη
              και επιστημονική τεκμηρίωση.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-2">
              Επικοινωνία
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="mailto:dr.papadopoulos@example.com"
                  className="hover:underline"
                >
                  dr.papadopoulos@example.com
                </a>
              </li>
              <li>
                <a href="tel:+30XXXXXXXXXX" className="hover:underline">
                  +30 XXX XXX XXXX
                </a>
              </li>
              <li>Θεσσαλονίκη, Ελλάδα</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-2">
              Σύνδεσμοι
            </h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#about" className="hover:underline">Σχετικά</a></li>
              <li><a href="#services" className="hover:underline">Υπηρεσίες</a></li>
              <li><a href="#contact" className="hover:underline">Επικοινωνία</a></li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom line */}
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Δημήτρης Μιχούδης — Με επιφύλαξη παντός δικαιώματος.
        </div>
      </div>
    </footer>
  );
}