import { Skeleton } from "../../../../../components";

export const ArticleItemSkeleton = ({ isFull }) => {
  const imgClasses = isFull ? "w-full" : "w-[55%] md:w-[30%] lg:w-[55%]";
  const contentClasses = isFull ? "w-full" : "w-[45%] md:w-[50%] lg:w-[45%]";
  return (
    <div className={`flex ${isFull ? "flex-col" : "flex-row"}  gap-3 `}>
      <div className="w-full">
        <Skeleton className=" !h-[150px] !w-full  !rounded-xl" />
      </div>
      <div className={contentClasses}>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <Skeleton className="   w-[90px] !rounded-xl" />
            <Skeleton className="   w-[70px] !rounded-xl" />
          </div>
          <Skeleton className="   w-[200px] !rounded-xl" />

          <Skeleton className="   w-[90px] !rounded-xl" />
        </div>
      </div>
    </div>
  );
};
export default ArticleItemSkeleton;
