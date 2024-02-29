import { useEffect } from "react";
import { Button, CardItemLink } from "../../../../components";
import { ArrowLongUpIconMini } from "../../../../lib/@heroicons";
import { useSWRHook } from "../../../../hooks";
import { API_SERVICES_URLS } from "../../../../data";
import PackagesSkeleton from "./PackagesSkeleton";
import { useTranslation } from "react-i18next";
export const Packages = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    data: packagesData,
    isLoading,
    mutate,
  } = useSWRHook(API_SERVICES_URLS.ALL_PACKAGES);

  useEffect(() => {
    mutate();
  }, [language]);

  return (
    <div className="bg-secondary pt-12 pb-[80px] relative">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 md:px-8">


        
            {/* الباقات */}


            
        <div className="mx-auto lg:w-[420px] text-center">
          <h2 className="text-2xl font-[700] text-center text-primary">
            {t("packages.title")}
          </h2>
          <p className="mt-3 text-black  mb-16 font-[500]">
            {t("packages.desc")}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {isLoading ? (
            <PackagesSkeleton />
          ) : (
            packagesData?.data?.map((packageItem) => (
              <CardItemLink
                key={packageItem?._id}
                linkPath={`/package-details/${packageItem?._id}`}
                classes="md:!h-[250px] !gap-1"
                titleClasses="!font-[500]  pb-7 ltr:!text-base"
                data={packageItem}
                cardClasses="!p-0 mb-5"
                imageClasses="rounded-t-[20px]"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Packages;
