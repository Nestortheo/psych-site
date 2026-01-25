

export default function ServiceCard({ title, text, className = "" }) {
  return (
    <div
      className={[
        "h-full w-full rounded-2xl p-6",
        "border border-[#dcdcd7] bg-[#efefec]",
        "shadow-sm transition hover:shadow-md hover:-translate-y-1 ",
        
        className,
      ].join(" ")}
    >
      <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-slate-900/10" />
      <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
      <p className="text-ink-strong text-sm leading-6">{text}</p>
    </div>
  );
}