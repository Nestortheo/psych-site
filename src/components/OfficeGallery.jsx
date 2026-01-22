import { useState } from "react";

export default function OfficeGallery({ photos }) {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActivePhoto(photo.src)}
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
      )}
    </>
  );
}