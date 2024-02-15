import { useTranslation } from "react-i18next";
import { Button, Card } from "../../../../components";
import { ArrowLongUpIconMini } from "../../../../lib/@heroicons";
import { useEffect, useState } from "react";

const people = [
  {
    id: 1,
    imageUrl: "./who.svg",
  },
  {
    id: 2,
    imageUrl: "./eye.svg",
  },
  {
    id: 3,
    imageUrl: "./idea.svg",
  },
  {
    id: 4,
    imageUrl: "./goal.svg",
  },
  {
    id: 5,
    imageUrl: "./values.svg",
  },
  {
    id: 6,
    imageUrl: "./services.svg",
  },
];

export const Marketing = () => {
  const [items, setItems] = useState();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const handleTranslate = () => {
    return people.map((item, index) => {
      return {
        ...item,
        name: t(`marketingSection.${index + 1}ItemTitle`),
        desc: t(`marketingSection.${index + 1}ItemDesc`),
      };
    });
  };
  useEffect(() => {
    let data = handleTranslate();
    setItems(() => data);
  }, [language]);

  return (
    <div className="bg-white relative">
      <div className=" mx-auto max-w-7xl px-2 sm:px-4 md:px-8 pt-32 mb-14">
        <h2 className="text-2xl font-[700] text-center text-primary mb-14">
          {t("secSectionTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2    md:grid-cols-3">
          {items?.map((person) => (
            <Card key={person.id} className="pb-5 ">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-14 w-14  "
                    src={person.imageUrl}
                    alt={person.name}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-lg font-[600] text-primary">
                    {person.name}
                  </span>
                  <span className="  text-sm text-black mt-1">
                    {person.desc}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Marketing;
