import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import img1 from "@assets/IMG-20260407-WA0015_1781867249513.jpg";
import img2 from "@assets/IMG-20260407-WA0016_1781867249198.jpg";
import img3 from "@assets/IMG-20260407-WA0017_1781867249425.jpg";
import img4 from "@assets/IMG-20260407-WA0018_1781867249569.jpg";
import img5 from "@assets/IMG-20260407-WA0019_1781867249682.jpg";
import img6 from "@assets/IMG-20260407-WA0020_1781867249742.jpg";
import img7 from "@assets/IMG-20260407-WA0021_1781867249781.jpg";
import img8 from "@assets/IMG-20260407-WA0022_1781867249628.jpg";
import img9 from "@assets/IMG-20260407-WA0023_1781867249825.jpg";
import img10 from "@assets/IMG-20260407-WA0024_1781867249866.jpg";
import img11 from "@assets/IMG-20260407-WA0025_1781867249907.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeri" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Momen & Fasilitas
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Galeri Sekolah
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-muted shadow-sm"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Galeri ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-medium text-lg tracking-wide border-b-2 border-primary pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Lihat
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-3"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage]}
                alt={`Galeri Full ${selectedImage + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-3"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
