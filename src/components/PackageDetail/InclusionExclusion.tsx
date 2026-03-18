import { CheckCircle, XCircle } from "lucide-react";



export default function InclusionExclusion({PackageData} : any) {
  return (
    <section className="py-12 px-6 sm:px-0">
      <div className="max-w-7xl mx-auto ">

        {/* SECTION TITLE */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          What’s Included & Excluded
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* INCLUSIONS */}
          <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Inclusions
            </h3>

            <ul className="space-y-3">
              {PackageData.inclusions.map((item : any , index : any) => (
                <li key={index} className="flex items-center gap-3">
                  <span><CheckCircle  className="w-5 h-5 text-green-600 mt-0.5" /></span>
                  <p className="text-gray-800 leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* EXCLUSIONS */}
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Exclusions
            </h3>

            <ul className="space-y-3">
              {PackageData.exclusions.map((item : any , index : any) => (
                <li key={index} className="flex items-start gap-3">
                  <span><XCircle className="w-5 h-5 text-red-500 mt-0.5" /></span> 
                  <span className="text-gray-800 leading-relaxed">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
