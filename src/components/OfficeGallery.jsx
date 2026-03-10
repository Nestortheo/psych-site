import { useState, useEffect } from "react";

export default function OfficeGallery({ photos }) {

  //const [activePhoto, setActivePhoto] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  //Mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const closeGallery = () => {
    setActiveIndex(null)
  }
  console.log("log length", photos.length)

  useEffect(() => {
    console.log("index ->", activeIndex)
},[activeIndex])

  const nextPhoto = () => {
  //setActiveIndex((prev) => (prev + 1) % photos.length);
  setActiveIndex(prev => {
    if (prev === photos.length - 1) return 0;
    return prev + 1;
  });
};



  const prevPhoto = () => {
          //setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
          /*
          if(activeIndex === 0){
            setActiveIndex(photos.length - 1)
          }
          else{
            setActiveIndex(activeIndex -1)
          }
        */
          setActiveIndex((prev) => {
            if(prev === 0) return photos.length-1
            return prev-1
          })
  };

  //Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if(activeIndex === null) return;
      if(e.key === "ArrowRight") nextPhoto();
      if(e.key === "ArrowLeft") prevPhoto();
      if(e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey);
  },[activeIndex])

   // swipe detection
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) nextPhoto();   // swipe left
    if (distance < -50) prevPhoto();  // swipe right

    setTouchStart(null);
    setTouchEnd(null);
  };

  //Lock backscreen when opened photo
  useEffect(() => {
  if (activeIndex !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [activeIndex]);

  return (
    <>
    {/* GRID LOADS PHOTOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <button
            key={i}
           // onClick={() => setActivePhoto(photo.src)}
            onClick = {() =>setActiveIndex(i)}
            className="group focus:outline-none"
            aria-label={`Open office photo ${i + 1}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-64 w-full rounded-2xl object-cover shadow-sm
                         transition-transform duration-300
                         group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>
      {/* PREV LIGHTBOX */}
    {/* 
      PREV VERSION NO ARROWS
      {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center
                      bg-black/50 backdrop-blur-sm"
            onClick={() => setActivePhoto(null)}
          >
            <img
              src={activePhoto}
              className="max-h-[90vh] max-w-[90vw]
                        rounded-2xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )} */}

      {/* LIGHTBOX */} 
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                      bg-black/50 backdrop-blur-sm"   
          onClick = {closeGallery}
          onTouchStart={(e) =>
            setTouchStart(e.targetTouches[0].clientX)
          }
          onTouchMove={(e) =>
            setTouchEnd(e.targetTouches[0].clientX)
          }
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT ARROW */}
           <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="hidden md:block absolute left-6 text-white/80 hover:text-white
                       text-4xl select-none"
            aria-label="Previous image"
          >
            ←
          </button>
          {/* IMG */}
          <img 
            src = {photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            className="max-h-[90vh] max-w-[90vw]
                        rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
          {/* RIGHT ARROW */}
           <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="hidden md:block absolute right-6 text-white/80 hover:text-white
                       text-4xl select-none"
            aria-label="Next image"
          >
            →
          </button>

          {/* CLOSE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeGallery();
            }}
            className="absolute top-6 right-6 text-white/80 hover:text-white
                       text-3xl"
            aria-label="Close gallery"
          >
            ✕
          </button>
        </div>
      )}
     
    </>
  );
}