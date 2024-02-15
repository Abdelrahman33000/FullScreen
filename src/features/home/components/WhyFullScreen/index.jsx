import { useTranslation } from "react-i18next";
import { FlipCard } from "../../../../components";
import { useEffect, useState } from "react";

const reasons = [
  {
    id: 1,

    imageUrl: "./creative.svg",
  },

  {
    id: 2,

    imageUrl: "./commit.svg",
  },
  {
    id: 3,

    imageUrl: "./access.svg",
  },
  {
    id: 4,

    imageUrl: "./prices.svg",
  },
];
export const WhyFullScreen = () => {
  const [items, setItems] = useState();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const handleTranslate = () => {
    return reasons.map((item, index) => {
      return {
        ...item,
        name: t(`whyFullscreenSection.${index + 1}ItemTitle`),
        desc: t(`whyFullscreenSection.${index + 1}ItemDesc`),
      };
    });
  };

  useEffect(() => {
    let data = handleTranslate();
    setItems(() => data);
  }, [language]);

  return (
    <div className="bg-secondary pt-[50px] pb-[80px]" id="heroSection">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
        <h2 className="text-2xl font-[700] text-center text-primary pb-16">
          {t("thirdSectionTitle")}{" "}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {items?.map((reason) => (
            <FlipCard key={reason.id} data={reason} classes="!max-h-[550px]" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyFullScreen;
