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
import { services } from "../data/services";

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

  return (
    <main id="content" className="text-ink">
      {/* TOP PHOTO BANNER */}
      <section aria-label="Office banner" className="relative -mt-20">
        <div className="
          relative overflow-hidden bg-black
          h-[42vh] min-h-[280px] max-h-[520px]
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
          <div className="absolute inset-0 bg-black/10" />

          {/* fade into page background (use token) */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        </div>

        {/* soft overlay to blend with navbar */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </section>

      {/* HERO */}
      <section id="hero" className={section}>
        <div className={container}>
          <div className="grid items-center gap-12 md:gap-16 md:grid-cols-2">
            {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">
                Δημήτρης Μιχούδης
              </h1>

              <p className="mt-3 text-base md:text-lg text-ink-soft">
                Ψυχολόγος • Συμβουλευτική Ψυχολογία • Θεσσαλονίκη & Online
              </p>

              <div className="mt-8 space-y-6 text-lg md:text-xl text-ink-soft leading-relaxed max-w-3xl mx-auto md:mx-0">
                <p>
                  Ονομάζομαι Δημήτρης Μιχούδης και είμαι ψυχολόγος. Σπούδασα Ψυχολογία στο
                  University of Sheffield, City College στη Θεσσαλονίκη και στη συνέχεια ολοκλήρωσα
                  μεταπτυχιακές σπουδές στη Συμβουλευτική Ψυχολογία στο ίδιο πανεπιστήμιο.
                </p>

                <p>
                  Στόχος μου είναι να προσφέρω έναν ασφαλή και αποδοτικό χώρο, όπου κάθε άτομο μπορεί να
                  εκφράσει ελεύθερα τις σκέψεις και τα συναισθήματά του, χωρίς φόβο για κριτική.
                </p>

                <p className="italic text-ink-strong">
                  Κάθε συνεδρία προσαρμόζεται στις ανάγκες του ανθρώπου απέναντί μου, με σεβασμό, εμπιστοσύνη
                  και σταθερότητα.
                </p>
              </div>

              {/* anchor where you want the page to land */}
              <span id="about" className="block scroll-mt-28" aria-hidden="true" />
              {/* new About */}
              <div className="mt-10 rounded-2xl bg-surface/75 ring-1 ring-black/5 p-5 md:p-6">
               <h2 className="text-md font-medium uppercase tracking-wide text-ink-soft">Σχετικά</h2>
                <div className="mt-4 space-y-5 text-ink-soft leading-relaxed">
                  <p>
                    Η ακαδημαϊκή μου εκπαίδευση με εφοδίασε με στέρεες θεωρητικές βάσεις, αλλά και ουσιαστικές
                    δεξιότητες στην πρακτική εφαρμογή της ψυχολογικής γνώσης.
                  </p>

                  <p>
                    Στην επαγγελματική μου πορεία ασχολούμαι με ζητήματα άγχους και διαχείρισης στρες, δυσκολίες στον
                    εργασιακό χώρο, καταθλιπτικά συναισθήματα, προκλήσεις στις διαπροσωπικές σχέσεις, αυτοεκτίμηση και
                    προσαρμογή σε νέες ή απαιτητικές συνθήκες ζωής.
                  </p>

                  <p className="italic text-ink-strong font-medium">
                    Η φιλοσοφία μου βασίζεται στην πεποίθηση ότι μέσα από τη θεραπευτική διαδικασία μπορούμε να
                    αναδείξουμε τις εσωτερικές μας δυνάμεις και να οικοδομήσουμε μια πιο ισορροπημένη καθημερινότητα.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-ink-strong px-5 py-3 text-white text-sm font-medium shadow-sm hover:opacity-90
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  Κλείσε ραντεβού
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-black/20 px-5 py-3 text-sm font-medium text-ink hover:bg-white/60"
                >
                  Υπηρεσίες
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative max-w-xl mx-auto w-full md:justify-self-end">
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm bg-white/50">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={dimitrisPhoto}
                    alt="Professional portrait"
                    className="h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    sizes="(min-width: 768px) 28rem, 16rem"
                  />
                </div>
              </div>

              <p className="mt-3 text-center md:text-right text-sm text-ink-soft">
                Διαθέσιμες συνεδρίες: online & δια ζώσης
              </p>
            </div>
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

