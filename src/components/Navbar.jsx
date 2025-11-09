import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base   = "px-3 py-2 rounded-md text-sm font-medium";
  const link   = base + " text-slate-700 hover:text-slate-900 hover:bg-slate-100";
  const cta    = "px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800";


  // auto-close menu when resizing to md+
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/35 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className={`flex items-center gap-2 `}>
            <span className="inline-block h-12 w-12 rounded-full bg-slate-900" aria-hidden="true" />
            <span className="text-lg font-semibold tracking-tight">Δημήτρης Μιχούδης</span>
          </a>

           {/* Desktop links */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/#about" className="text-slate-700 hover:text-slate-900 px-4 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/#services" className="text-slate-700 hover:text-slate-900 px-4 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="/#contact" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
              Contact
            </a>
          </div>

          {/* Burger (mobile) */}
          <button
            className="md:hidden text-3xl text-slate-700 hover:text-slate-900 p-1.5 rounded-md border border-slate-300/70 bg-white/70"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"}`}>
          <div className="py-4 px-6 flex flex-col items-center gap-3 bg-white/95 backdrop-blur text-slate-700 shadow-md border-t border-slate-200">
            <a href="/#about"    className={`${link}`} onClick={() => setOpen(false)}>About</a>
            <a href="/#services" className={`${link}`} onClick={() => setOpen(false)}>Services</a>
            <a href="/#contact"  className={`${cta}`}  onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
