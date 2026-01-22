import dimitrisPhoto from "../images/dimitris-michoudis.jpeg";
import bannerPhoto from "../images/IMG_9079.jpeg";

import office1 from "../images/IMG_9079.jpeg";
import office2 from "../images/IMG_9080.jpeg";
import office3 from "../images/IMG_9081.jpeg";
import office4 from "../images/IMG_9084.jpeg";
import office5 from "../images/IMG_9085.jpeg";

import ContactForm from "../components/ContactForm";
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
  ];

  return (
    <main id="content" className="text-slate-800">
      {/* TOP PHOTO BANNER */}
      <section aria-label="Office banner" className="relative -mt-20">
        <div className="h-[520px] w-full overflow-hidden relative">
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

          {/* fade into page background (greige system) */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t
                       from-[#f6f6f4] via-[#f6f6f4]/50 to-transparent"
          />
        </div>

        {/* soft overlay to blend with navbar */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </section>

      {/* HERO */}
      <section id="hero" className="scroll-mt-24 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid items-center gap-12 md:gap-16 md:grid-cols-2">
            {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Δημήτρης Μιχούδης
              </h1>

              <p className="mt-3 text-base md:text-lg text-slate-600">
                Ψυχολόγος • Συμβουλευτική Ψυχολογία • Θεσσαλονίκη & Online
              </p>

              <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
                <p>
                  Ονομάζομαι Δημήτρης Μιχούδης και είμαι ψυχολόγος. Σπούδασα Ψυχολογία στο
                  University of Sheffield, City College στη Θεσσαλονίκη και στη συνέχεια ολοκλήρωσα
                  μεταπτυχιακές σπουδές στη Συμβουλευτική Ψυχολογία στο ίδιο πανεπιστήμιο.
                </p>

                <p>
                  Στόχος μου είναι να προσφέρω έναν ασφαλή και αποδοτικό χώρο, όπου κάθε άτομο μπορεί να
                  εκφράσει ελεύθερα τις σκέψεις και τα συναισθήματά του, χωρίς φόβο για κριτική.
                </p>

                <p className="italic text-slate-700">
                  Κάθε συνεδρία προσαρμόζεται στις ανάγκες του ανθρώπου απέναντί μου, με σεβασμό, εμπιστοσύνη
                  και σταθερότητα.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1f2937] px-5 py-3 text-white text-sm font-medium shadow-sm hover:bg-[#111827]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  Κλείσε ραντεβού
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-white/60"
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
              <p className="mt-3 text-center md:text-right text-sm text-slate-500">
                Διαθέσιμες συνεδρίες: online & δια ζώσης
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (panel) */}
      <section id="about" className="scroll-mt-24 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-[#fbfbfa] ring-1 ring-[#dcdcd7] px-6 py-14 md:px-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Σχετικά</h2>
              <div className="h-1 w-16 bg-[#2f3e34]/70 mx-auto my-8 rounded-full" />

              <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                <p>
                  Η ακαδημαϊκή μου εκπαίδευση με εφοδίασε με στέρεες θεωρητικές βάσεις, αλλά και ουσιαστικές
                  δεξιότητες στην πρακτική εφαρμογή της ψυχολογικής γνώσης.
                </p>

                <p>
                  Στην επαγγελματική μου πορεία ασχολούμαι με ζητήματα άγχους και διαχείρισης στρες, δυσκολίες στον
                  εργασιακό χώρο, καταθλιπτικά συναισθήματα, προκλήσεις στις διαπροσωπικές σχέσεις, αυτοεκτίμηση και
                  προσαρμογή σε νέες ή απαιτητικές συνθήκες ζωής.
                </p>

                <p className="italic text-slate-800 font-medium">
                  Η φιλοσοφία μου βασίζεται στην πεποίθηση ότι μέσα από τη θεραπευτική διαδικασία μπορούμε να
                  αναδείξουμε τις εσωτερικές μας δυνάμεις και να οικοδομήσουμε μια πιο ισορροπημένη καθημερινότητα.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (panel + gentle intro) */}
      <section id="services" className="scroll-mt-24 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-[#fbfbfa] ring-1 ring-[#dcdcd7] px-6 py-14 md:px-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Υπηρεσίες</h2>
            <p className="mx-auto mt-4 mb-10 max-w-2xl text-center text-slate-600 leading-relaxed">
              Συνεδρίες προσαρμοσμένες στις ανάγκες σας, σε ένα ασφαλές και υποστηρικτικό πλαίσιο.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.title} title={s.title} text={s.text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE (panel + gallery) */}
      <section id="office" className="scroll-mt-24 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-[#fbfbfa] ring-1 ring-[#dcdcd7] px-6 py-14 md:px-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ο χώρος μου</h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed mb-10">
              Ένας χώρος σχεδιασμένος ώστε να προσφέρει ηρεμία, άνεση και αίσθηση ασφάλειας.
            </p>

            <OfficeGallery photos={officePhotos} />
          </div>
        </div>
      </section>

      {/* CONTACT (panel + form) */}
      <section id="contact" className="scroll-mt-24 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-[#fbfbfa] ring-1 ring-[#dcdcd7] px-6 py-14 md:px-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Επικοινωνία</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 leading-relaxed">
              Αν νιώθετε ότι θα θέλατε να μιλήσουμε, μπορείτε να επικοινωνήσετε μαζί μου ή να συμπληρώσετε τη φόρμα.
            </p>

            <ContactSection />
          </div>
        </div>
      </section>
    </main>
  );
}
