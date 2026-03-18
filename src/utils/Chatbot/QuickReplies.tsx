"use client";

interface QuickRepliesProps {
  onSelect: (text: string) => void;
}

const chips = [
  { label: "🗓️ Tour Packages", text: "What tour packages do you offer and what are the prices?" },
  { label: "🕍 Temple Timings", text: "What are the temple darshan timings in Vrindavan?" },
  { label: "📞 Book a Tour", text: "How can I book a tour? What is the process?" },
  { label: "🛕 About Braj", text: "Tell me about the Braj region and what makes it spiritually special." },
  { label: "🚗 Delhi Pickup", text: "Do you provide pickup and drop from Delhi?" },
  { label: "🌸 Best Time to Visit", text: "What is the best time to visit Mathura and Vrindavan?" },
  { label: "💰 Pricing", text: "What is the starting price for a 2-day Mathura Vrindavan tour?" },
  { label: "🛕 Govardhan Yatra", text: "Tell me about the 5-day Braj 84 Kos Yatra package." },
];

export default function QuickReplies({ onSelect }: QuickRepliesProps) {
  return (
    <div className="px-3.5 py-3 border-t border-orange-50">
      <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wide mb-2">
        Quick Questions
      </p>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip.label}
            onClick={() => onSelect(chip.text)}
            className="
              text-xs bg-orange-50 hover:bg-orange-100 text-orange-700
              border border-orange-200 hover:border-orange-400
              rounded-full px-3 py-1.5
              transition-all duration-200
              hover:shadow-sm active:scale-95
              cursor-pointer whitespace-nowrap
            "
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
}
