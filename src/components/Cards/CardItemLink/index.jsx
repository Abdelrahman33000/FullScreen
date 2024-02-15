import { NavLink } from "react-router-dom";
import Card from "../Card";

export const CardItemLink = ({
  data,
  classes,
  titleClasses,
  linkPath,
  cardClasses,
  imageClasses,
  outerLink = false,
}) => {
  if (outerLink) {
    return (
      <a
        href={linkPath}
        target="_blank"
        className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%]  md:hover:scale-105 md:hover:-translate-y-1   md:transition md:ease-linear md:delay-50"
      >
        <Card className={cardClasses}>
          <div
            className={`flex flex-col justify-center items-center gap-3 ${classes}`}
          >
            <div className="flex-shrink-0">
              <img
                className={imageClasses + " !object-cover"}
                src={data?.icon || data?.file}
                alt={data?.name}
              />
            </div>

            <span
              className={`block text-xl font-[700] mt-3 text-primary ${titleClasses}`}
            >
              {data?.name}
            </span>
          </div>
        </Card>
      </a>
    );
  } else {
    return (
      <NavLink
        to={linkPath}
        className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%]  md:hover:scale-105 md:hover:-translate-y-1   md:transition md:ease-linear md:delay-50"
      >
        <Card className={cardClasses}>
          <div
            className={`flex flex-col justify-center items-center gap-3 ${classes}`}
          >
            <div className="flex-shrink-0">
              <img
                className={imageClasses + " !object-cover"}
                src={data?.icon || data?.file}
                alt={data?.name}
              />
            </div>

            <span
              className={`block text-xl font-[700] mt-3 text-primary ${titleClasses}`}
            >
              {data?.name}
            </span>
          </div>
        </Card>
      </NavLink>
    );
  }
};
export default CardItemLink;
