import { useTranslation } from "react-i18next";
import { CardItem } from "../../../../components";

export const PackageDetails = ({ detailsData }) => {
  const { t } = useTranslation();

  function createMarkup(data) {
    return { __html: data };
  }

  const dataDescriptionFormat = createMarkup(detailsData?.details);
  return (
    <div id="showDetails">
      <div className="bg-secondary pt-[70px] pb-[70px] relative text-start ">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4  ">
            {detailsData?.services?.map((packageItem, index) => (
              <CardItem
                key={packageItem.name + index}
                linkPath="/package-details"
                classes="!h-[200px]"
                titleClasses="!font-[500] !text-black !text-[15px] !-mt-2"
                data={packageItem}
                roundedSize="rounded-[15px]"
                imageClasses="!w-[150px] !h-[150px]"
              />
            ))}
          </div>

          <div className="px-2 mt-20">
            <h2 className="text-2xl font-[700] text-primary pb-1">
              {t("packages.packageDetailsTitle")}
            </h2>

            <ul className="text-black font-[500] flex flex-col gap-5 list-disc mt-5 text-justify mr-5">
              <div dangerouslySetInnerHTML={dataDescriptionFormat} />
            </ul>
            {detailsData?.link && (
              <a
                className=" flex items-center justify-between    mt-20 text-primary hover:!text-primaryDark transition-colors ease-out delay-100"
                href={detailsData?.link}
                target="_blank"
              >
                <span className=" font-[700] text-2xl">
                  {t("packages.downloadPackage")}
                </span>
                <img
                  src="/download.svg"
                  alt="downloadIcon"
                  className="w-8 h-8"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
