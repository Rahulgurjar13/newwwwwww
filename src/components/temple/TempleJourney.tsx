"use client";

export default function TempleJourney({ TempleData }: { TempleData: any }) {
  return (
    <section className="py-10 md:py-24 bg-[#f9e6d5]">

      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#7a2e00]">
          Sacred Journey of the Temple
        </h2>
        <p className="text-gray-600 text-xs md:text-sm mt-4">
          Explore the divine chapters and spiritual history of this sacred temple.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div
          className="
            bg-white rounded-3xl border border-orange-100 shadow-sm px-8 py-10
            text-sm text-gray-600 leading-relaxed

            [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:text-[#7a2e00] [&_h1]:mb-4
            [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-[#7a2e00] [&_h2]:mb-3 [&_h2]:mt-6
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#a63d00] [&_h3]:mb-2 [&_h3]:mt-5
            [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-[#a63d00] [&_h4]:mb-2

            [&_p]:mb-4 [&_p:last-child]:mb-0 [&_p]:text-gray-600 [&_p]:leading-7

            [&_strong]:font-semibold [&_strong]:text-[#7a2e00]
            [&_em]:italic [&_em]:text-amber-700

            [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:mb-4
            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:mb-4
            [&_li]:text-gray-600 [&_li]:leading-relaxed

            [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2
            [&_ul_li]:before:content-['✦'] [&_ul_li]:before:text-amber-400 [&_ul_li]:before:text-xs [&_ul_li]:before:mt-1 [&_ul_li]:before:flex-shrink-0

            [&_table]:w-full [&_table]:border-collapse [&_table]:mb-6 [&_table]:rounded-xl [&_table]:overflow-hidden
            [&_thead]:bg-gradient-to-r [&_thead]:from-orange-50 [&_thead]:to-yellow-50
            [&_th]:text-left [&_th]:px-5 [&_th]:py-3 [&_th]:text-xs [&_th]:font-semibold [&_th]:text-amber-700 [&_th]:uppercase [&_th]:tracking-wider [&_th]:border-b [&_th]:border-orange-200
            [&_td]:px-5 [&_td]:py-3 [&_td]:border-b [&_td]:border-orange-100/70 [&_td]:text-gray-600 [&_td]:text-sm
            [&_tr:last-child_td]:border-b-0
            [&_tr:hover_td]:bg-orange-50/40

            [&_blockquote]:border-l-4 [&_blockquote]:border-amber-400 [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:my-4 [&_blockquote]:text-amber-800 [&_blockquote]:italic [&_blockquote]:bg-amber-50/50 [&_blockquote]:rounded-r-lg

            [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-orange-700

            [&_hr]:border-orange-100 [&_hr]:my-6
          "
          dangerouslySetInnerHTML={{ __html: TempleData.journey }}
        />
      </div>

    </section>
  );
}