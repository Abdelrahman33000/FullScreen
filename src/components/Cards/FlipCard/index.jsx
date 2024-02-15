import { useTranslation } from "react-i18next";

export const FlipCard = ({ data }) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <div className="flex   items-center justify-center  rounded-[20px] ">
      <div
        className={`group ${
          language == "ar" ? "h-96" : "h-[410px]"
        }  w-72 [perspective:1000px]`}
      >
        <div
          className="relative bg-white h-full w-full rounded-[20px]  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
          style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
        >
          <div
            className={`absolute  inset-0  flex flex-col justify-center items-center gap-3   `}
          >
            <div className="flex-shrink-0">
              <img className="h-20 w-20" src={data.imageUrl} alt={data.name} />
            </div>

            <span className={`block text-xl font-[700] mt-3 text-primary`}>
              {data.name}
            </span>
          </div>

          <div className="absolute inset-0 h-full w-full  rounded-[20px] bg-white px-12 text-center  [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex-shrink-0 absolute -top-8 left-[50%] translate-x-[-50%]">
              <img className="h-20 w-20" src={data.imageUrl} alt={data.name} />
            </div>
            <div className="flex min-h-full flex-col items-center justify-start mt-20 gap-5">
              <span className={`block text-xl font-[700]  text-primary`}>
                {data.name}
              </span>
              <p
                className={`${
                  language == "ar" ? "text-md" : "text-[14px]"
                } text-black`}
              >
                {data.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
