export function TourCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden relative">

      {/* Image Skeleton */}
      <div className="h-[240px] bg-gray-200 relative overflow-hidden">
        <div className="shimmer"></div>
      </div>

      <div className="p-6 space-y-4">

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-200 rounded relative overflow-hidden">
          <div className="shimmer"></div>
        </div>

        {/* Location */}
        <div className="h-4 w-1/3 bg-gray-200 rounded relative overflow-hidden">
          <div className="shimmer"></div>
        </div>

        {/* Small Info Row */}
        <div className="flex gap-4">
          <div className="h-4 w-20 bg-gray-200 rounded relative overflow-hidden">
            <div className="shimmer"></div>
          </div>

          <div className="h-4 w-40 bg-gray-200 rounded relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="h-4 bg-gray-200 rounded relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <div className="h-12 flex-1 bg-gray-200 rounded-xl relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
          <div className="h-12 flex-1 bg-gray-200 rounded-xl relative overflow-hidden">
            <div className="shimmer"></div>
          </div>
        </div>

      </div>
    </div>
  );
}