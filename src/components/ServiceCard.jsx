import{
  MoveRight,
} from "lucide-react";

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
      <div className="flex flex-col gap-5 md:flex-row md:gap-4">

        <div 
          className="
            flex
            h-16 w-16
            items-center justify-center
            rounded-full
            bg-[#f1ece6]
            shadow-sm
            shrink-0
            self-center md:self-start
           "
        >
          <Icon size={36}  className="text-[#c1ae99]"/>
        </div>

        <div>
          <h3 className="font-semibold text-lg md:text-xl text-center md:text-left">
            {title}
          </h3>
          
          <p className="mt-4 text-sm md:text-base text-center md:text-left ">
            {summary}
          </p>

        </div>    
          
      </div>
       {/* Push button to bottom */}
      <button className="mt-auto pt-8 text-center md:text-left group  cursor-pointer">
        <span className="inline-flex items-center gap-2 text-[#b8a692] font-semibold">
          Περισσότερα
          <span 
            className="
              mt-1 
              transition-transform group-hover:translate-x-1
            "
          >
            <MoveRight />
          </span>
        </span>
      </button>
      
   
    </div>
  );
}