

export default function ServiceCard({ title, text, className = "" }) {
  return (
    <div
      className={[
        "h-full w-full max-w-md rounded-2xl p-6",
        "border border-[#dcdcd7] bg-[#efefec]",
        "shadow-sm transition hover:shadow-md hover:-translate-y-1 ",
        
        className,
      ].join(" ")}
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-700 text-sm leading-6">{text}</p>
    </div>
  );
}