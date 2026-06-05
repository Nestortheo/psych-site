

export default function ServiceCard({ title,summary,text,icon, onClick, className = "" }) {
  const Icon = icon;
  return (
    <div
      onClick={onClick}
      className={[
        "cursor-pointer",
        "h-full rounded-2xl p-6",
        "border border-[#b8a692] bg-[#efefec]",
        "shadow-sm transition hover:shadow-md hover:-translate-y-5 ",
        "flex flex-col",
        
      
        className,
      ].join(" ")}
    >
      <div className="flex gap-6">

        <div className="shrink-0 text-[#b8a692]">
          <Icon size={40}  />
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            {title}
          </h3>
          
          <p className="mt-4 text-base ">
            {summary}
          </p>

        </div>    
          
      </div>
       {/* Push button to bottom */}
      <button className="mt-auto pt-8 text-left group  cursor-pointer">
        <span className="inline-flex items-center gap-2">
          Περισσότερα
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </button>
      
   
    </div>
  );
}