export default function ServiceCard({ title, text, className = "" }) {
  return (
     <div
      className={`p-6 border border-slate-200 rounded-2xl bg-white h-full w-full max-w-md 
      shadow-sm transition hover:shadow-md hover:-translate-y-1 hover:border-indigo-200 ${className}`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-700 text-sm leading-6">{text}</p>
    </div>
  );
}