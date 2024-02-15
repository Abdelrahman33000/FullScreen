import { Button, LeftArrow, RightArrow } from "../../../components";

export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className="[&>.slick-next]:top-[107%] sm:[&>.slick-next]:top-[112%] md:[&>.slick-next]:top-[50%] [&>.slick-next]:left-[52%] md:[&>.slick-next]:left-[103%]  [&>.slick-next::before]:hidden">
      <Button
        className={`${className}  bg-white  flex hover:!bg-opacity-95 w-9 h-9 !p-0  justify-center items-center`}
        onClick={onClick}
        buttonSize="small"
      >
        <RightArrow className="text-primary w-7 h-7" />
      </Button>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="[&>.slick-prev]:top-[107%] sm:[&>.slick-prev]:top-[112%] md:[&>.slick-prev]:top-[50%] [&>.slick-prev]:left-[40%]   md:[&>.slick-prev]:right-[103%] md:[&>.slick-prev]:ltr:left-[-70px] [&>.slick-prev::before]:hidden">
      <Button
        className={`${className}   bg-white    flex hover:!bg-opacity-95 w-9 h-9 !p-0  justify-center items-center`}
        onClick={onClick}
        buttonSize="small"
      >
        <LeftArrow className="text-primary w-7 h-7" />
      </Button>
    </div>
  );
}
