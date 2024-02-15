import { Button } from "../../../../components";
import { ArrowLongUpIconMini } from "../../../../lib/@heroicons";

export const Service = ({ data, reverse, firstSection }) => {
  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <div
      id={data?.serviceNo}
      className={`${
        reverse ? "bg-white" : "bg-secondary"
      } px-2 md:px-0  md:py-[50px] relative`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
        <div className="py-10">
          <div className="flex flex-col sm:flex-row gap-10">
            <div
              className={`order-2 ${
                reverse ? "sm:order-2" : "sm:order-1"
              } w-full lg:w-[45%] `}
            >
              <img src={data?.image} alt="image" className="rounded-xl " />
            </div>
            <div
              className={`order-1 ${
                reverse ? "sm:order-1" : "sm:order-2"
              } w-full lg:w-[42%] mt-2 lg:mt-12 `}
            >
              <span className="text-xl md:text-2xl text-primary font-bold">
                {data?.title}
              </span>
              <p
                className="text-black  text-md lg:text-lg font-[400]   mt-3   lg:mt-5 text-justify"
                dangerouslySetInnerHTML={createMarkup(
                  data?.name || data?.details
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
