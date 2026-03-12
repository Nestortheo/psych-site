import dimitrisPhoto from "../images/dimitris-michoudis.jpeg";
import bannerPhoto from "../images/IMG_9079.jpeg";

import office1 from "../images/IMG_9079.jpeg";
import office2 from "../images/IMG_9080.jpeg";
import office3 from "../images/IMG_9081.jpeg";
import office4 from "../images/IMG_9084.jpeg";
import office5 from "../images/IMG_9085.jpeg";
import office6 from "../images/IMG_9092.jpeg"


import ServiceCard from "../components/ServiceCard";
import OfficeGallery from "../components/OfficeGallery";
import ContactSection from "../components/ContactSection";
import HeroText from "../components/HeroText"
import { services } from "../data/services";
import { useEffect } from "react";

export default function Home() {
  const officePhotos = [
    { src: office1, alt: "Therapy office overview" },
    { src: office2, alt: "Seating area with armchair" },
    { src: office3, alt: "Couch and calm lighting" },
    { src: office4, alt: "Decor details in the office" },
    { src: office5, alt: "Therapy room seating and plants" },
    { src : office6, alt: "Therapy office"},
  ];

  // Reusable class strings 
  const section = "scroll-mt-24 py-20 md:py-24";
  const container = "max-w-7xl mx-auto px-6";
  const panel =
    "rounded-3xl bg-surface/55 ring-1 ring-black/10 px-6 py-14 md:px-12 md:py-16";
  const divider = "h-1 w-16 bg-ink/30 mx-auto my-8 rounded-full";

  //Just to wake up sleeping server, we dont care to get anything back
  //only to wake it up.
  useEffect(() => {
  console.log("waking backend...");
  fetch(`${import.meta.env.VITE_API_URL}/api/contact/`)
    .catch(() => {});
}, []);

  return (
    <main id="content" className="text-ink">
      {/* TOP PHOTO BANNER */}
      <section aria-label="Office banner" className="relative md:-mt-20">
        <div className="
          relative overflow-hidden bg-surfaceDark
          h-[55vh] min-h-[280px] max-h-[520px]
          sm:h-[52vh] sm:min-h-[360px] sm:max-h-[600px]
          md:h-[60vh] md:min-h-[420px] md:max-h-[680px]">
          <img
            src={bannerPhoto}
            alt="The office space"
            className="w-full h-full object-cover block"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />

          {/* very light darken for readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* fade into page background (use token) */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-surface/50 to-transparent" />

          {/* HERO CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

            <h1 className="
              text-white/90
              text-3xl sm:text-4xl md:text-5xl 
              font-semibold 
              tracking-tight
              max-w-3xl
            ">
              Ψυχοθεραπεία με σεβασμό και εμπιστοσύνη
            </h1>

            <p className="mt-4 text-white text-base sm:text-lg">
              Θεσσαλονίκη & Online
            </p>

            <a
              href="#contact"
              className="
                mt-8
                inline-flex items-center justify-center
                rounded-xl
                bg-white text-black
                px-6 py-3
                text-sm font-medium
                shadow-lg
                hover:bg-white/90
                transition
              "
            >
              Κλείσε ραντεβού
            </a>

          </div>
        </div>


        {/* soft overlay to blend with navbar */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </section>

      {/* HERO */}
      <section id="about" className={section}>
        <div className={container}>
          <div className="grid items-center gap-12 md:gap-2 md:grid-cols-2">

            {/* PHOTO FIRST */}
            <div className="flex justify-center md:justify-start">
              <img
                src={dimitrisPhoto} // <-- change path if needed
                alt="Δημήτρης Μιχούδης"
                className="
                  rounded-2xl 
                  object-cover 
                  w-72 aspect-square
                  md:w-[450px] md:h-[520px] 
                  shadow-sm
                "
              />
            </div>

            {/* TEXT */}
            <HeroText />

          </div>
        </div>
      </section>

            {/* SERVICES */}
            <section id="services" className={section}>
              <div className={container}>
                <div className={panel}>
                  <h2 className="text-3xl md:text-4xl font-semibold text-ink">Υπηρεσίες</h2>
                  <div className="h-1 w-16 bg-ink/30  my-8 rounded-full" />

                  <p className="-mt-2 mb-10 max-w-2xl text-center text-ink leading-relaxed">
                    Συνεδρίες προσαρμοσμένες στις ανάγκες σας, σε ένα ασφαλές και υποστηρικτικό πλαίσιο.
                  </p>

                  <div className="max-w-3xl">
                    <div className="grid gap-6">
                      {services.map((s) => (
                        <ServiceCard
                          key={s.title}
                          title={s.title}
                          text={s.text}
                          className="bg-surface ring-1 ring-black/10 pl-6 relative"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* OFFICE */}
      <section id="office" className={section}>
        <div className={container}>
          <div className={panel}>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink">Ο χώρος μου</h2>
            <div className="h-1 w-16 bg-ink/30 my-8 rounded-full" />

            <p className="-mt-2 text-ink-soft max-w-2xl leading-relaxed mb-10">
              Ο χώρος όπου πραγματοποιούνται οι συνεδρίες.
            </p>

            <OfficeGallery photos={officePhotos} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={section}>
        <div className={container}>
          {/* Keep ContactSection in its own layout since it probably has its own panel */}
          <ContactSection />
        </div>
      </section>
    </main>
  );
}

