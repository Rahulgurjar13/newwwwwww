import { toNamespacedPath } from "path";
import SideForm from "../PackageDetail/SideForm";

export default function TempleStory({ TempleData }: { TempleData: any }) {
  return (
    <section className="pb-8 pt-20 bg-[#fdf7f2]">

      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN TITLE */}

        <header className="text-center mb-5">

          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#7a2e00]">
            {TempleData.title} – Complete Guide
          </h1>

          <p className="text-gray-600 mt-4">
            Discover the history, architecture, spiritual significance and
            cultural importance of one of the most sacred temples of Braj.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mt-6 rounded-full"></div>

        </header>

        <div className="max-w-7xl mx-auto  py-12 ">

          {/* GRID */}
          <div className=" grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-18 ">

            {/* LEFT CONTENT */}
            <main className="space-y-12">

              <section className="mx-auto px-4 ">
                <div className="temple-content
                    prose prose-slate max-w-none
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:my-1
                    prose-li:marker:text-slate-500
                    prose-p:leading-7
                    "
                  dangerouslySetInnerHTML={{ __html: TempleData?.content ?? "" }}
                />

              </section>

            </main>

            {/* RIGHT SIDEBAR */}

            <aside className="hidden lg:block ">
              <div className="sticky top-28">
                <SideForm />
              </div>
            </aside>
          </div>
        </div>



      </div>

    </section>
  );
}