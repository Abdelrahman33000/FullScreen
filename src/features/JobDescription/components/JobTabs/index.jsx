import { Tab } from "@headlessui/react";
import Description from "../Description";
import ApplyForm from "../ApplyForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const JobTabs = ({ description }) => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabsData = [
    {
      id: 1,
      name: t("hiring.hiringDescription.tabs.descTapTitle"),
      panel: (
        <Description
          setSelectedIndex={setSelectedIndex}
          descriptionContent={description}
        />
      ),
    },
    {
      id: 2,
      name: t("hiring.hiringDescription.tabs.applyTapTitle"),
      panel: <ApplyForm />,
    },
  ];

  return (
    <div className="w-full px-2 py-0 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className=" max-w-md  mx-auto  flex space-x-1 rounded-xl bg-grayDark px-4 py-3">
          {tabsData.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-md font-[400] leading-5 text-black  focus:outline-none",
                  selected
                    ? "bg-white !text-primary shadow"
                    : "text-black hover:bg-white/[0.12] hover:text-primary"
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabsData.map((tab) => (
            <Tab.Panel
              key={tab.id}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2   focus:outline-none  "
              )}
            >
              {tab.panel}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default JobTabs;
