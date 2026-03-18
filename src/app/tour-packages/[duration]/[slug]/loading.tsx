export default function Loader(){
    return (
 
    <div className="max-w-7xl mx-auto px-4 py-6 animate-pulse mt-8">

      {/* Breadcrumb */}
      <div className="h-4 w-56 bg-gray-200 rounded mb-6"></div>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* HERO IMAGE */}
        <div className="lg:col-span-2">
          <div className="h-[420px] w-full bg-gray-200 rounded-3xl"></div>
        </div>

        {/* SIDE CARDS */}
        <div className="space-y-6 hidden  md:grid grid-cols-2 gap-4 ">

          <div className="h-[200px] bg-gray-200 rounded-2xl"></div>

          <div className="h-[200px] bg-gray-200 rounded-2xl"></div>

          <div className="h-[200px] bg-gray-200 rounded-2xl"></div>
        
          <div className="h-[200px] bg-gray-200 rounded-2xl"></div>



        </div>
      </div>

      {/* TITLE + RATING */}
      <div className="mt-8 space-y-4 ">

        <div className="h-8 w-72 bg-gray-200 rounded"></div>

        <div className="h-5 w-40 bg-gray-200 rounded"></div>

      </div>

      {/* BOOKING CARD */}
      <div className=" max-w-md ml-auto -mt-8 ">

        <div className="bg-gray-200 rounded-2xl h-[120px]"></div>

      </div>

        <section className="max-w-7xl mx-auto px-4 py-10 animate-pulse">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">

          {/* DAY HEADER */}
          <div className="flex items-center gap-6 bg-gray-100 rounded-2xl p-6">

            <div className="h-10 w-24 bg-gray-200 rounded-full"></div>

            <div className="space-y-2">
              <div className="h-6 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>

          </div>

          {/* FEATURE ROW */}
          <div className="flex flex-wrap gap-8 border-y py-6">

            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-28 bg-gray-200 rounded"></div>
            <div className="h-4 w-36 bg-gray-200 rounded"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>

          </div>

          {/* ROUTE CARD */}
          <div className="flex items-center justify-between border rounded-2xl p-6">

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full"></div>

              <div className="space-y-2">
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
                <div className="h-5 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="h-6 w-6 bg-gray-200 rounded"></div>

          </div>

          {/* PACKAGE OVERVIEW TITLE */}
          <div className="space-y-4">

            <div className="h-4 w-40 bg-gray-200 rounded"></div>

            <div className="h-8 w-56 bg-gray-200 rounded"></div>

          </div>

        </div>

        {/* RIGHT ENQUIRY FORM */}
        <div className="bg-gray-100 rounded-2xl p-6 space-y-5 h-fit">

          <div className="h-6 w-52 bg-gray-200 rounded"></div>

          <div className="h-12 w-full bg-gray-200 rounded"></div>

          <div className="h-12 w-full bg-gray-200 rounded"></div>

          <div className="flex gap-3">
            <div className="h-12 w-20 bg-gray-200 rounded"></div>
            <div className="h-12 flex-1 bg-gray-200 rounded"></div>
          </div>

          <div className="h-12 w-full bg-gray-200 rounded"></div>

          <div className="h-12 w-full bg-gray-200 rounded"></div>

          <div className="h-24 w-full bg-gray-200 rounded"></div>

          <div className="h-12 w-full bg-gray-300 rounded-xl"></div>

        </div>

      </div>

    </section>


    </div>
  
    )
}