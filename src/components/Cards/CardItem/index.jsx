import Card from "../Card";

export const CardItem = ({
  roundedSize = "rounded-[20px]",
  data,
  classes,
  titleClasses,
  imageClasses,
}) => {
  return (
    <Card
      className={`w-full sm:w-[40%] md:w-[30%] lg:w-[20%]  md:hover:scale-105 md:hover:-translate-y-1   md:transition md:ease-linear md:delay-50 ${roundedSize}`}
    >
      <div
        className={`flex flex-col justify-center items-center gap-3 ${classes} `}
      >
        <div className="flex-shrink-0">
          <img
            className={`h-20 w-20 ${imageClasses}`}
            src={data.image}
            alt={data.name}
          />
        </div>

        <span
          className={`block text-xl font-[700] mt-3 text-primary ${titleClasses}`}
        >
          {data.name}
        </span>
      </div>
    </Card>
  );
};
export default CardItem;
