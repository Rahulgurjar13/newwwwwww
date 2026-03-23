"use client";

export default function CtaBreak({ text, buttonText }: { text: string; buttonText: string }) {
  return (
    <div className="relative bg-gradient-to-r from-[#b3500a] via-[#cf7602] to-[#c45800] py-10 sm:py-12 px-5 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-yellow-200 blur-3xl" />
      </div>
      <div className="relative z-10">
        <p className="text-white font-bold text-lg sm:text-2xl mb-5 max-w-xl mx-auto leading-snug">{text}</p>
        <button
          onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
          className="inline-block rounded-full bg-white text-orange-600 font-bold px-8 py-3.5 shadow-xl
          hover:shadow-2xl hover:bg-orange-50 transition duration-300 cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
