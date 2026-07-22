import {useState} from "react"


export default function HeroText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border text-center max-w-xl mx-auto">

      <p className="text-sm tracking-[0.2em] uppercase text-[#b8a692]">
        Ψυχολόγος • Συμβουλευτική Ψυχολογία • Θεσσαλονίκη & Online
      </p>

      <div className="mt-4 h-[2px] w-12 bg-[#b8a692] mx-auto" />

      <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-ink">
        Λίγα λόγια για εμενα
      </h2>

      {/* SHORT INTRO ONLY */}
      <p className="
        text-base md:text-lg 
        text-ink 
        leading-relaxed 
        mt-6
      ">
        Ονομάζομαι Δημήτρης Μιχούδης και είμαι ψυχολόγος.
        Σπούδασα Ψυχολογία στο University of Sheffield,
        City College στη Θεσσαλονίκη και στη συνέχεια ολοκλήρωσα 
        μεταπτυχιακές σπουδές στη Συμβουλευτική Ψυχολογία στο ίδιο πανεπιστήμιο.
      </p>

      {/* EXPAND BUTTON */}
      <button
        onClick={() => setExpanded(prev => !prev)}
        className="
          mt-6 
          text-sm font-medium 
          text-ink-strong 
          border-b border-ink-strong/40
          hover:border-ink-strong
          transition
        "
      >
        {expanded ? "Λιγότερα" : "Μάθε περισσότερα"}
      </button>

      {/* EXPANDABLE CONTENT */}
      {expanded && (
        <div className="mt-8 space-y-6 text-ink-soft leading-relaxed">
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
      <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 md:items-center sm:justify-center justify-start">

        <a
          href="#contact"
          className="
            inline-flex items-center justify-center
            rounded-xl
            bg-ink-strong text-white
            px-6 py-3.5
            text-sm font-semibold
            shadow-md
            hover:scale-[1.02]
            hover:opacity-95
            transition-all
            focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20
          "
        >
          Κλείσε ραντεβού
        </a>

        <a
          href="#services"
          className="
            inline-flex items-center justify-center
            rounded-xl
            border border-black/20
            px-6 py-3.5
            text-sm font-medium text-ink
            hover:bg-black/5
            transition
          "
        >
          Δες τις υπηρεσίες
        </a>

      </div>

    </div>
  );
}