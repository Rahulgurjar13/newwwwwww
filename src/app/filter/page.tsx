// app/filter/page.tsx
import FilteredPackagesClient from "@/components/Filtered/FilteredPackagesClient";
import { Suspense } from "react";
import LoadingPackages from "@/utils/LoadingPackages";

export default function FilterPage() {
  return (
    <Suspense fallback={<LoadingPackages/>}>
      <FilteredPackagesClient />
    </Suspense>
  );
}
