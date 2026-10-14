import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  id: number;
  url: string;
  title?: string;
  category?: string;
}

interface LightboxModalProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      onNext();
    } else if (diff < -50) {
      onPrev();
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem em ecrã inteiro"
    >
      {/* Top Header: Counter & Close Button */}
      <div
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20 text-[#EBDCC6]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-sans text-xs tracking-widest uppercase bg-[#4A3426]/80 px-3 py-1.5 border border-[#C9A24D]/40 text-[#E8D08A] tabular-nums">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 bg-[#4A3426]/80 hover:bg-[#C9A24D] text-[#EBDCC6] hover:text-[#3A2A1F] border border-[#C9A24D]/40 transition-colors"
          aria-label="Fechar visualizador"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-[#4A3426]/80 hover:bg-[#C9A24D] text-[#EBDCC6] hover:text-[#3A2A1F] border border-[#C9A24D]/40 transition-all z-20"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-4xl max-h-[82vh] w-full flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative border-2 border-[#C9A24D] bg-[#2A1E17] shadow-2xl overflow-hidden max-h-[75vh]">
          <img
            src={currentImage.url}
            alt={currentImage.title || 'Trabalho de Russian Manicure'}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-[#4A3426]/80 hover:bg-[#C9A24D] text-[#EBDCC6] hover:text-[#3A2A1F] border border-[#C9A24D]/40 transition-all z-20"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
