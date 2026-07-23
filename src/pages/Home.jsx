import { useState, useRef } from "react";

import dimitrisPhoto from "../images/dimitris-michoudis.jpeg";
import bannerPhoto from "../images/IMG_9079.jpeg";

import office1 from "../images/IMG_9079.jpeg";
import office2 from "../images/IMG_9080.jpeg";
import office3 from "../images/IMG_9081.jpeg";
import office4 from "../images/IMG_9084.jpeg";
import office5 from "../images/IMG_9085.jpeg";
import office6 from "../images/IMG_9092.jpeg"
import ServiceImage from "../images/Service.png"


import ServiceCard from "../components/ServiceCard";
import OfficeGallery from "../components/OfficeGallery";
import ContactSection from "../components/ContactSection";
import HeroText from "../components/HeroText"
import { services } from "../data/services";
import { useEffect } from "react";



import{
  BadgeCheck,
} from "lucide-react";

export default function Home() {

  //Service Section State
  const [selectedService, setSelectedService] = useState(null);
  const serviceDetailsRef = useRef(null);

  //onClick event for service section + scroll
const handleServiceClick = (service) => {
  if (selectedService?.title === service.title) {
    setSelectedService(null);
    return;
  }

  setSelectedService(service);

  setTimeout(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const y =
        serviceDetailsRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        100;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      serviceDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, 100);
};
 
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
          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center px-6
              max-w-2xl mx-auto
            "
          >
            <h1
              className="
                text-white
                text-2xl sm:text-3xl md:text-[2.5rem]
                font-semibold
                tracking-tight
                leading-tight
              "
            >
              Ψυχοθεραπεία στη Θεσσαλονίκη
              με στόχο την ουσιαστική αλλαγή
            </h1>

            <p className="
              mt-5 
              text-white/90 
              text-base sm:text-lg 
              leading-relaxed
            ">
              Με σεβασμό, εμπιστοσύνη και εξατομικευμένη προσέγγιση — 
              δια ζώσης στη Θεσσαλονίκη ή online.
            </p>

            <a
              href="#contact"
              className="
                mt-8
                inline-flex items-center justify-center
                rounded-xl
                bg-white text-black
                px-7 py-3.5
                text-sm font-semibold
                shadow-lg
                hover:bg-white/90
                hover:scale-[1.03]
                transition-all
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
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-[#b8a692]">
                ΥΠΗΡΕΣΙΕΣ ΨΥΧΟΘΕΡΑΠΕΙΑΣ
              </p>

              <div className="mt-4 h-[2px] w-12 bg-[#b8a692] mx-auto" />

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-ink">
                Θέματα που μπορούμε να δουλέψουμε μαζί.
              </h2>

              <p className="mt-6 text-ink-soft max-w-2xl mx-auto leading-relaxed">
                Επιλέξτε μια θεματική για να δείτε περισσότερες πληροφορίες.
              </p>
            </div>
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s) => (
                  <ServiceCard
                    key={s.title}
                    title={s.title}
                    summary={s.summary}
                    text={s.text}
                    icon={s.icon}
                    onClick={() => handleServiceClick(s)}
                    className={`
                    bg-surface pl-6 relative
                    ${
                      selectedService?.title === s.title
                        ? "border-[#ab987f] bg-[#ece7e0] shadow-md"
                        : "border-white"
                    }
                  `}
                  />
                ))}
              </div>
              {selectedService && (
                <div 
                  ref={serviceDetailsRef}
                  className="mt-12 rounded-2xl border border-[#b8a692] p-8"
                >

                  {(() => {
                    const SelectedIcon = selectedService.icon;
                    const Tags = selectedService.tags

                    return (
                      <>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                          <SelectedIcon
                            size={40}
                            className="text-[#b8a692]"
                          />

                          <h3 className="text-2xl text-center font-semibold">
                            {selectedService.title}
                          </h3>
                        </div>

                        <div className="border-b border-[#b8a692]/50 mt-4" />

                        <div className="mt-6 flex justify-between gap-12">

                          {/* Left side */}
                          <div className="flex flex-col">

                            <p className="leading-relaxed">
                              {selectedService.text}
                            </p>

                            <p className="mt-8 font-bold">
                              Πως μπορώ να βοηθήσω;
                            </p>

                            <div className="mt-6 flex flex-col gap-4">
                              {Tags.map((tag) => (
                                <ul
                                  key={tag}
                                  className="text-sm flex gap-2"
                                >
                                  <span className="text-[#b8a692]">
                                    <BadgeCheck size={22} />
                                  </span>

                                  <span>{tag}</span>
                                </ul>
                              ))}
                            </div>

                          </div>

                          {/* Right side image */}
                          <div className="hidden lg:flex items-end justify-center shrink-0">
                            <img
                              src={ServiceImage}
                              alt=""
                              className="w-90 opacity-90"
                            />
                          </div>

                        </div>
                      </>
                    );
                  })()}

                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section id="office" className={section}>
        <div className={container}>
          <div className={panel}>
            <div className="text-center">

              <p className="text-sm tracking-[0.2em] uppercase text-[#b8a692]">
                ΧΩΡΟΣ ΣΥΝΕΔΡΙΩΝ
              </p>

              <div className="mt-4 h-[2px] w-12 bg-[#b8a692] mx-auto" />

              <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-ink">
                Ένας χώρος ασφάλειας και εμπιστοσύνης
              </h2>

              <p className="mt-6 text-ink-soft max-w-2xl mx-auto leading-relaxed">
                Ένας σύγχρονος και διακριτικός χώρος στο κέντρο της Θεσσαλονίκης για ατομικές και online συνεδρίες.
              </p>

            </div>
            <div className="mt-20">
              <OfficeGallery photos={officePhotos} />
            </div>
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

