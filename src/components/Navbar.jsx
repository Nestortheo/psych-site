import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base   = "px-3 py-2 rounded-md text-md font-medium";
  const link   = base + " text-ink-soft hover:text-ink ";
  const cta    = "px-4 py-2 rounded-lg bg-ink-strong text-white text-sm hover:opacity-90";


  // auto-close menu when resizing to md+
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-surface/45 backdrop-blur-md border-b border-surface/10 shadow-sm">
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Brand (we dont have a brand img yet)*/}
          <a href="/" className={`flex items-center gap-2 `}>
            <span
              className="hidden h-12 w-12 rounded-full bg-slate-900"
              aria-hidden="true"
            />
            <span className="text-lg md:text-xl font-medium tracking-tight">
  Δημήτρης Μιχούδης
</span>
          </a>

           {/* Desktop links */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/#about" className="text-ink-soft hover:text-ink px-4 py-2 text-base font-medium transition-colors">
              About
            </a>

            <a href="/#services" className="text-ink-soft hover:text-ink px-4 py-2 text-base font-medium transition-colors">
              Services
            </a>

            <a href="/#contact" className="inline-flex items-center justify-center
                                      rounded-xl
                                      bg-ink-strong
                                      px-5 py-2.5
                                      text-sm font-medium text-white
                                      shadow-sm
                                      hover:opacity-90
                                      transition-opacity
                                      focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">
              Contact
            </a>
          </div>

          {/* Burger (mobile) */}
          <button
            className="md:hidden text-3xl text-ink hover:text-ink-strong p-1.5 rounded-md border border-ink bg-surface/10"
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
          <div className="py-4 px-6 flex flex-col items-center gap-3 bg-surface/10 backdrop-blur shadow-md border-t border-slate-200">
            <a href="/#about"    className={`${link}`} onClick={() => setOpen(false)}>About</a>
            <a href="/#services" className={`${link}`} onClick={() => setOpen(false)}>Services</a>
            <a href="/#contact"  className={`${cta}`}  onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
