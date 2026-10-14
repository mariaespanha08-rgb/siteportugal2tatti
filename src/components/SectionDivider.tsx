interface SectionDividerProps {
  variant?: 'to-wood' | 'to-beige';
  className?: string;
}

export default function SectionDivider({
  variant = 'to-wood',
  className = '',
}: SectionDividerProps) {
  const isToWood = variant === 'to-wood';

  return (
    <div
      className={`relative w-full flex items-center justify-center py-0 ${className}`}
      aria-hidden="true"
    >
      <div className="w-full flex items-center justify-center max-w-6xl mx-auto px-6">
        <div
          className={`h-[1px] flex-grow ${
            isToWood
              ? 'bg-gradient-to-r from-transparent via-[#C9A24D]/60 to-[#C9A24D]'
              : 'bg-gradient-to-r from-transparent via-[#C9A24D]/60 to-[#C9A24D]'
          }`}
        />
        <div className="mx-4 flex items-center justify-center">
          <span className="text-[#C9A24D] text-xs transform rotate-45 select-none font-serif">
            ◆
          </span>
        </div>
        <div
          className={`h-[1px] flex-grow ${
            isToWood
              ? 'bg-gradient-to-l from-transparent via-[#C9A24D]/60 to-[#C9A24D]'
              : 'bg-gradient-to-l from-transparent via-[#C9A24D]/60 to-[#C9A24D]'
          }`}
        />
      </div>
    </div>
  );
}
