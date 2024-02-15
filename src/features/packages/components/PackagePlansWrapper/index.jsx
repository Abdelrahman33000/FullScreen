import { useParams } from "react-router-dom";
import { Button, HeroSection } from "../../../../components";
import { ArrowLongUpIconMini } from "../../../../lib/@heroicons";
import PlanTaps from "../PlanTaps";
import { useSWRHook } from "../../../../hooks";
import { API_SERVICES_URLS } from "../../../../data";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const PackagePlansWrapper = () => {
  const {
    i18n: { language },
  } = useTranslation();

  let { id } = useParams();

  const { data: dataPackages, mutate } = useSWRHook(
    API_SERVICES_URLS.PACKAGE_DETAILS(id),
    {},
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateAll: false,
    }
  );

  useEffect(() => {
    mutate();
  }, [language]);

  return (
    <>
      <HeroSection type="main" />
      <div className="bg-white pt-[50px]   relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
          <h2 className="text-2xl font-[700] text-center text-primary pb-8">
            {dataPackages?.data?.parent?.name}
          </h2>
        </div>
        <PlanTaps data={dataPackages?.data} />
      </div>
    </>
  );
};
export default PackagePlansWrapper;
