import { useState, useEffect } from "react";

export default function ContactForm({compact=false}) {

    const [status, setStatus] = useState({ type: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const[form,setForm] = useState({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        website: "", // honeypot field
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

     // 🔹 Local validation before submitting
    const validateForm = () => {
        if (!form.name.trim()) return "Το όνομα είναι υποχρεωτικό.";
        if (!form.last_name.trim()) return "Το επώνυμο είναι υποχρεωτικό.";
        if (!form.email.trim()) return "Το email είναι υποχρεωτικό.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            return "Παρακαλώ εισάγετε έγκυρη διεύθυνση email.";
        if (!form.message.trim() || form.message.trim().length < 10)
            return "Το μήνυμα πρέπει να περιέχει τουλάχιστον 10 χαρακτήρες.";
        return null; // no errors
    };

     // 🔹 Live feedback for message length
    useEffect(() => {
        if (form.message.length > 0 && form.message.length < 10) {
        setStatus({
            type: "error",
            message: "Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες.",
        });
        } else if (status.type === "error" && status.message.includes("10 χαρακτήρες")) {
        // clear only the live error if fixed
        setStatus({ type: "", message: "" });
        }
    }, [form.message]);


    const handleSubmit = async (e) => {
        e.preventDefault(); // stop page reload

        const validationError = validateForm();
        if (validationError) {
            setStatus({ type: "error", message: validationError });
            return;
        }
        setIsLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.ok) {
                //alert("✅ Το μήνυμα στάλθηκε με επιτυχία!");
                setStatus({ type: "success", message: "✅ Το μήνυμα στάλθηκε με επιτυχία!" });
                setForm({ name: "", last_name: "", email: "", phone: "", message: "", website: "" });
                } else {
                setStatus({ type: "error", message: "❌ Παρουσιάστηκε σφάλμα. Δοκίμασε ξανά." });
                }
        } catch (err) {
            console.error("Error submitting form:", err);
            setStatus({ type: "error", message: "⚠️ Δεν ήταν δυνατή η σύνδεση με τον διακομιστή." });
            //alert("⚠️ Αποτυχία σύνδεσης με τον server.");
        } finally {
            setIsLoading(false);
        }
        
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
            <div className="grid gap-4">
            {/* 🕵️ Honeypot field */}
            <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
                aria-hidden="true"
            >
                <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900 mb-1 text-left">
                Όνομα *
                </label>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2 outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900 mb-1 text-left">
                Επώνυμο *
                </label>
                <input
                type="text"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2 outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900 mb-1 text-left">
                Email *
                </label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2 outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900 mb-1 text-left">
                Τηλέφωνο
                </label>
                <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2 outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900 mb-1 text-left">
                Μήνυμα *
                </label>
                <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2 outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
            </div>
            </div>

            <div className="flex items-center gap-4">
            <button
                type="submit"
                disabled={isLoading}
                className="rounded-xl bg-ink-strong text-white px-5 py-2.5 text-sm font-medium
                        disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-75"
            >
                {isLoading ? "Αποστολή..." : "Αποστολή"}
            </button>

            {status.message && (
                <p
                className={`text-sm ${
                    status.type === "success" ? "text-ink-soft" : "text-red-700"
                }`}
                >
                {status.message}
                </p>
            )}
            </div>
        </form>
        
    );
}