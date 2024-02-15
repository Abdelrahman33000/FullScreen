import { NavLink } from "react-router-dom";
import { formatDate } from "../../../../utils";

const ArticleItem = ({ data, classes, isFull = false, handleActive }) => {
  const imgClasses = isFull ? "w-full" : "w-[55%] md:w-[30%] lg:w-[55%]";
  const contentClasses = isFull ? "w-full" : "w-[45%] md:w-[50%] lg:w-[45%]";
  return (
    <div className={`flex  gap-3  ${classes}`}>
      <div className={imgClasses}>
        <NavLink
          to={`/article-details/${data?._id}`}
          onClick={() => handleActive(data)}
        >
          <img
            src={data?.image}
            alt="image"
            className={`rounded-xl object-cover w-full ${
              !isFull ? "!h-[150px]" : "h-[200px]"
            }`}
          />
        </NavLink>
      </div>

      <div className={contentClasses}>
        <div className={`flex flex-col  ${isFull ? "gap-2" : "gap-4"}`}>
          <div className="flex gap-5">
            {data?.tags?.map((tag) => (
              <span key={tag} className="text-grayDefault inline-block px-1">
                {tag}
              </span>
            ))}
          </div>
          <NavLink
            to={`/article-details/${data?._id}`}
            onClick={() => handleActive(data)}
          >
            <span className="font-medium text-primary text-opacity-95">
              {data?.title}
            </span>
          </NavLink>

          <span className="text-grayDefault">
            {formatDate(data?.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
