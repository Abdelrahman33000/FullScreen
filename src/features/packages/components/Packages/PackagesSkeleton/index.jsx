import { Skeleton } from "../../../../../components";

export const PackagesSkeleton = () => {
  return (
    <>
      <Skeleton className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] !h-[250px] !rounded-[20px]" />
      <Skeleton className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] !h-[250px] !rounded-[20px]" />
      <Skeleton className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] !h-[250px] !rounded-[20px]" />
      <Skeleton className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] !h-[250px] !rounded-[20px]" />
    </>
  );
};

export default PackagesSkeleton;
