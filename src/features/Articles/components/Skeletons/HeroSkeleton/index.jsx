import { Skeleton } from "../../../../../components";
import ArticleItemSkeleton from "../ArticleItemSkeleton";

export const HeroSkeleton = ({ withBrief }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="w-full  lg:w-2/3    ">
        <Skeleton className="!h-[450px] w-full !rounded-xl" />

        {withBrief && (
          <>
            <div className="flex gap-5  my-2.5 ">
              <Skeleton className="  w-[200px] !rounded-xl" />
              <Skeleton className="  w-[150px] !rounded-xl" />
            </div>
            <Skeleton className=" !h-[20px] w-[450px] !rounded-xl" />
          </>
        )}
      </div>

      <div className="flex flex-col gap-10 w-full  lg:w-1/3 mt-8 md:mt-0">
        <ArticleItemSkeleton />
        <ArticleItemSkeleton />
      </div>
    </div>
  );
};
export default HeroSkeleton;
