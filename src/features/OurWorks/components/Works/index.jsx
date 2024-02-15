import { useEffect } from "react";
import { Button, CardItemLink } from "../../../../components";
import { ArrowLongUpIconMini } from "../../../../lib/@heroicons";
import { useSWRHook } from "../../../../hooks";
import { API_SERVICES_URLS } from "../../../../data";
import PackagesSkeleton from "./WorksSkeleton";
import { useTranslation } from "react-i18next";
export const Works = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useSWRHook(API_SERVICES_URLS.GET_ALL_PROJECTS);

  let flattenedWorksData;
  const worksData = data?.data?.map((work) => work.projects);
  if (worksData) {
    flattenedWorksData = [...worksData[0], ...worksData[1]];
  }

  return (
    <div className="bg-secondary pt-12 pb-[80px] relative">
      <div className="  mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
        <div className="mx-auto lg:w-[420px] text-center">
          <h2 className="text-2xl font-[700] text-center text-primary">
            {t("ourWorks.title")}
          </h2>
          <p className="mt-3 text-black  mb-16 font-[500]">
            {t("ourWorks.desc")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center  items-center gap-4">
          {isLoading && !flattenedWorksData ? (
            <PackagesSkeleton />
          ) : (
            flattenedWorksData?.map((workItem) => (
              <CardItemLink
                outerLink={true}
                key={workItem._id}
                linkPath={workItem.link}
                classes="  !gap-1"
                titleClasses="!font-[500]  pb-7 ltr:!text-base"
                data={workItem}
                cardClasses="!p-0 mb-5 !rounded-[10px]"
                imageClasses="rounded-[10px] p-1"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Works;
