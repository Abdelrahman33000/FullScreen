import { Button, LeftArrow, RightArrow } from "../../../components";

export function SampleNextArrow({
  containerClassName,
  className,
  onClick,
  iconClasses,
  buttonClasses,
}) {
  return (
    <div
      className={`top-0 [&>.slick-next]:top-[110%] [&>.slick-next]:start-[52%]    [&>.slick-next::before]:hidden ${containerClassName} `}
    >
      <Button
        className={`${className} !bg-primary   flex hover:!bg-opacity-95 w-9 h-9 !p-0  justify-center items-center ${buttonClasses} z-[5]`}
        onClick={onClick}
        buttonSize="small"
      >
        <RightArrow className={`text-white w-4 h-4 ${iconClasses}`} />
      </Button>
    </div>
  );
}

export function SamplePrevArrow({
  className,
  containerClassName,
  onClick,
  iconClasses,
  buttonClasses,
}) {
  return (
    <div
      className={`top-0 [&>.slick-prev]:top-[110%] [&>.slick-prev]:start-[40%]  [&>.slick-prev::before]:hidden ${containerClassName}`}
    >
      <Button
        className={`${className} !bg-primary   flex hover:!bg-opacity-95 w-9 h-9 !p-0  justify-center items-center ${buttonClasses} z-[5] `}
        onClick={onClick}
        buttonSize="small"
      >
        <LeftArrow className={`text-white w-4 h-4 ${iconClasses}`} />
      </Button>
    </div>
  );
}
