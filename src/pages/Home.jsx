import dimitrisPhoto from "../images/placeholder.jpg";
import testphoto from "../images/Testing.jpg"
import ContactForm from "../components/ContactForm";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Home() {
  return (
    <main id="content" className="text-slate-800">
      {/* TOP PHOTO BANNER */}
      <section aria-label="Ο χώρος του γραφείου" className="relative -mt-20">
      {/* -mt-20 = τραβάει τη φωτογραφία προς τα πάνω ώστε να περάσει πίσω από το navbar */}
      <div className="h-[420px] w-full overflow-hidden relative">
        <img
          src={testphoto}
          alt="Ο χώρος του γραφείου"
          className="w-full h-full object-cover block"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
        />
        {/* ελαφρύ σκοτείνιασμα */}
        <div className="absolute inset-0 bg-black/10" />
        {/* fade στο κάτω μέρος για να “λιώσει” στο λευκό του hero */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
        {/* ήπιο σκοτείνιασμα για να δένει με το navbar */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </section>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="scroll-mt-24 min-h-[60vh] flex items-center bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 border">
          <div className="grid items-center gap-10 md:gap-16 md:grid-cols-2">

            {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Δημήτρης Μιχούδης
              </h1>

              <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto md:mx-0">
                <p>
                  Ονομάζομαι Δημήτρης Μιχούδης και είμαι ψυχολόγος. Σπούδασα Ψυχολογία στο
                  University of Sheffield, City College στη Θεσσαλονίκη και στη συνέχεια
                  ολοκλήρωσα τις μεταπτυχιακές μου σπουδές στη Συμβουλευτική Ψυχολογία στο ίδιο
                  πανεπιστήμιο, όπου πραγματοποίησα και την πρακτική μου άσκηση.
                </p>
                <p>
                  Στόχος μου είναι να προσφέρω έναν ασφαλή και αποδοτικό χώρο, όπου κάθε άτομο
                  μπορεί να εκφράσει ελεύθερα τις σκέψεις και τα συναισθήματά του, χωρίς φόβο για κριτική.
                </p>
                <p className="italic text-slate-700">
                  Πιστεύω ότι κάθε άνθρωπος διαθέτει μέσα του τους απαραίτητους πόρους για αλλαγή και εξέλιξη·
                  πολλές φορές, ωστόσο, χρειάζεται την υποστήριξη ενός ειδικού για να τους αναγνωρίσει και να τους αξιοποιήσει.
                </p>
              </div>

              {/* CTA (προαιρετικά) */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  Κλείσε ραντεβού
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Υπηρεσίες
                </a>
              </div>
            </div>

            {/*Image */}
            <div className="relative max-w-xl mx-auto w-full md:justify-self-end ">
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-md">
                <div className="aspect-[4/5] w-full border">
                  <img
                    src={dimitrisPhoto}
                    alt="Ψυχολόγος Δημήτρης Μιχούδης – επαγγελματικό πορτρέτο"
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

      {/* 🧠 ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 md:scroll-mt-28 py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 border">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">Σχετικά</h2>
            <div className="h-1 w-16 bg-indigo-500 mx-auto my-8 rounded-full" />
              <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                <p>
                  Η ακαδημαϊκή μου εκπαίδευση με εφοδίασε με στέρεες θεωρητικές βάσεις,
                  αλλά και με ουσιαστικές δεξιότητες στην πρακτική εφαρμογή της ψυχολογικής γνώσης.
                </p>

                <p>
                  Στην επαγγελματική μου πορεία ασχολούμαι με ζητήματα που σχετίζονται με το άγχος και τη διαχείριση στρες,
                  τις δυσκολίες στον εργασιακό χώρο, τα καταθλιπτικά συναισθήματα, τις προκλήσεις στις διαπροσωπικές σχέσεις,
                  την αυτοεκτίμηση και την αυτοπεποίθηση, καθώς και την προσαρμογή σε νέες ή απαιτητικές συνθήκες ζωής.
                </p>

                <p>
                  Παράλληλα, βρίσκομαι στη διαδικασία περαιτέρω εκπαίδευσης στην ψυχοσεξουαλική θεραπεία,
                  διευρύνοντας έτσι τα εργαλεία και τις προσεγγίσεις μου, ώστε να ανταποκρίνομαι με πιο ολοκληρωμένο τρόπο
                  στις ιδιαίτερες ανάγκες κάθε συμβουλευόμενου.
                </p>

                <p>
                  Στο νέο μου επαγγελματικό ταξίδι, πολύτιμη μέντοράς μου είναι η Στέλλα Καραπά,
                  η οποία έχει αναλάβει τον ρόλο της επόπτριάς μου, προσφέροντάς μου καθοδήγηση και υποστήριξη.
                </p>

                <p className="italic text-slate-800 text-lg md:text-xl font-medium">
                  Η φιλοσοφία μου βασίζεται στην πεποίθηση ότι μέσα από την ψυχοθεραπευτική διαδικασία μπορούμε
                  να αναδείξουμε τις εσωτερικές μας δυνάμεις, να αντιμετωπίσουμε τις προκλήσεις και να οικοδομήσουμε
                  μια πιο ισορροπημένη και ουσιαστική καθημερινότητα.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* 🪞 SERVICES SECTION */}
      <section id="services" className="scroll-mt-24 py-20 bg-indigo-600/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Υπηρεσίες</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {services.map((s) => (
              <ServiceCard
              key={s.title}
              title={s.title}
              text={s.text}
              className={
                
                  "bg-indigo-50 border-indigo-300"
                  
              }
            />
            ))}
          </div>
        </div>
      </section>

      {/* 📩 CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center border">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Επικοινωνία</h2>
          <ContactForm />
        </div>
      </section>

    </main>
  );
}