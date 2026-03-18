import { Sparkles } from "lucide-react";



export default function PackageHighlights({ PackageData }: any) {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP DIVIDER */}
        <div className="border-t border-gray-200 mb-6" />

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Trip Highlights
        </h2>

        <div className="space-y-4">
          {PackageData.highlights.map((item : any, index : any) => (
            <div
              key={index}
              className="flex gap-4 items-start rounded-xl
                bg-[#FFF7ED] px-5 py-4"
            >
              {/* ICON */}
              <div className="mt-1">
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>

              {/* TEXT */}
              <p className="text-gray-800 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-b border-gray-200 mt-8" />

      </div>
    </section>
  );
}
