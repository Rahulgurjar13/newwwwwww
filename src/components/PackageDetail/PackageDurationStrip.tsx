"use client";

interface DurationItem {
  id: string;
  days: number;
  place: string;
}

interface PackageDurationStripProps {
  duration: string;
  breakdown: DurationItem[];
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}

export default function PackageDurationStrip({
  duration,
  breakdown,
}: PackageDurationStripProps) {
  return (
    <section className="px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">

        {/* ── DESKTOP: horizontal scroll strip ── */}
        <div className="hidden md:flex items-stretch gap-0 overflow-x-auto scrollbar-hide rounded-xl border border-gray-100 bg-white shadow-sm  max-w-4xl">

          {/* Duration pill — sticky left anchor */}
          <div className="flex items-center shrink-0 px-5 py-4 border-r border-gray-100 bg-orange-50">
            <span className="inline-flex items-center rounded-full bg-orange-600 text-white px-4 py-1.5 text-sm font-bold tracking-wide whitespace-nowrap">
              {duration}
            </span>
          </div>

          {/* Scrollable day items */}
          {breakdown.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center shrink-0 cursor-pointer gap-3 px-5 py-4 border-r border-gray-100 last:border-r-0 hover:bg-orange-50/40 transition-colors duration-150 group"
            >
              {/* Ordinal number */}
              <span className="text-3xl font-extrabold text-orange-500 group-hover:text-orange-600 transition-colors leading-none tabular-nums">
                {ordinal(index + 1)}
              </span>

              {/* Text */}
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                  Day in
                </span>
                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                  {item.place}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE: vertical list ── */}
        <div className="md:hidden">
          {/* Header row */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center rounded-full bg-orange-600 text-white px-4 py-1.5 text-sm font-bold tracking-wide">
              {duration}
            </span>
            <span className="text-xs text-gray-400 font-medium">
              {breakdown.length} stops
            </span>
          </div>

          {/* Vertical timeline */}
          <div className="relative pl-6">
            {/* Timeline line */}
            <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gray-200" />

            {breakdown.map((item, index) => (
              <div key={item.id} className="relative flex items-start gap-3 py-2.5">
                {/* Timeline dot */}
                <div className="absolute left-[-15px] top-3.5 w-[10px] h-[10px] rounded-full border-2 border-orange-500 bg-white shrink-0" />

                {/* Ordinal */}
                <span className="text-xl font-extrabold text-orange-600 leading-none w-8 shrink-0 tabular-nums pt-0.5">
                  {ordinal(index + 1)}
                </span>

                {/* Text */}
                <div className="flex flex-col leading-tight pt-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                    Day in
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {item.place}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}