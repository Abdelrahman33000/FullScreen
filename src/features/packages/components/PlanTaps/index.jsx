import { useState } from "react";
import { Tab } from "@headlessui/react";
import PlanCard from "../PlanCards";
import PackageDetails from "../PackageDetails";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function PlanTaps({ data }) {
  const [packageDetails, setPackageDetails] = useState();
  return (
    <div className=" relative">
      <div className="pb-36 mx-auto max-w-7xl px-2 sm:px-4 md:px-8  mt-10">
        <div className="w-full px-2 py-0 sm:px-0">
          <Tab.Group>
            <Tab.List className=" max-w-md  mx-auto  flex space-x-1 rounded-xl bg-grayDark px-4 py-3">
              {Object.keys(data?.packages || {}).map((item) => (
                <Tab
                  key={item}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-md font-[400] leading-5 text-black  focus:outline-none",
                      selected
                        ? "bg-white !text-primary shadow"
                        : "text-black hover:bg-white/[0.12] hover:text-primary"
                    )
                  }
                >
                  {item}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(data?.packages || {})?.map((item, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2   focus:outline-none  "
                  )}
                >
                  <PlanCard
                    data={item}
                    setPackageDetails={setPackageDetails}
                    type={Object.keys(data?.packages || {})[idx]}
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      {packageDetails && <PackageDetails detailsData={packageDetails} />}
    </div>
  );
}
export default PlanTaps;
