import {useState} from "react"


export default function HeroText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-center md:text-left">

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
        Μερικά Λόγια
      </h1>

      <p className="text-base md:text-lg text-ink-soft mb-6">
        Ψυχολόγος • Συμβουλευτική Ψυχολογία • Θεσσαλονίκη & Online
      </p>

      {/* SHORT INTRO ONLY */}
      <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto md:mx-0">
        Ονομάζομαι Δημήτρης Μιχούδης και είμαι ψυχολόγος.
        Σπούδασα Ψυχολογία στο University of Sheffield,
        City College στη Θεσσαλονίκη και στη συνέχεια ολοκλήρωσα 
        μεταπτυχιακές σπουδές στη Συμβουλευτική Ψυχολογία στο ίδιο πανεπιστήμιο.
      </p>

      {/* EXPAND BUTTON */}
      <button
        onClick={() => setExpanded(prev => !prev)}
        className="mt-6 text-sm font-medium text-ink-strong underline underline-offset-4 hover:opacity-80"
      >
        {expanded ? "Λιγότερα" : "Μάθε περισσότερα"}
      </button>

      {/* EXPANDABLE CONTENT */}
      {expanded && (
        <div className="mt-8 space-y-5 text-ink-soft leading-relaxed max-w-2xl mx-auto md:mx-0">
          <p>
            Η ακαδημαϊκή μου εκπαίδευση με εφοδίασε με στέρεες θεωρητικές βάσεις,
            αλλά και ουσιαστικές δεξιότητες στην πρακτική εφαρμογή της ψυχολογικής γνώσης.
          </p>

          <p>
            Στην επαγγελματική μου πορεία ασχολούμαι με ζητήματα άγχους και διαχείρισης στρες,
            δυσκολίες στον εργασιακό χώρο, καταθλιπτικά συναισθήματα, προκλήσεις στις διαπροσωπικές σχέσεις,
            αυτοεκτίμηση και προσαρμογή σε νέες ή απαιτητικές συνθήκες ζωής
          </p>

          <p>
            Στόχος μου είναι να προσφέρω έναν ασφαλή και αποδοτικό χώρο,
            όπου κάθε άτομο μπορεί να εκφράσει ελεύθερα τις σκέψεις και
            τα συναισθήματά του, χωρίς φόβο για κριτική. 
          </p>

          <p className="italic text-ink-strong font-medium">
            Η θεραπευτική διαδικασία μπορεί να αναδείξει τις εσωτερικές
            μας δυνάμεις και να συμβάλει σε μια πιο ισορροπημένη
            καθημερινότητα.
          </p>
        </div>
      )}

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
  );
}