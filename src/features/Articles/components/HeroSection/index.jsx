import { NavLink } from "react-router-dom";
import ArticleItem from "../ArticleItem";
import { useSWRHook, useSWRMutationHook } from "../../../../hooks";
import { API_SERVICES_URLS } from "../../../../data";
import HeroSkeleton from "../Skeletons/HeroSkeleton";
import ArticleItemSkeleton from "../Skeletons/ArticleItemSkeleton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const truncateText = (string) => {
  return string?.length > 10 ? string.substring(0, 450) + "..." : string;
};

function createMarkup(data) {
  return { __html: data };
}

export const HeroSection = ({ withBrief = false, withDetails = false }) => {
  let { id } = useParams();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { data, isLoading, mutate } = useSWRHook(
    API_SERVICES_URLS.ALL_ARTICLES
  );

  const {
    customTrigger: customTriggerActive,
    data: dataActive,
    isMutating,
  } = useSWRMutationHook(API_SERVICES_URLS.ARTICLE_DETAILS(id));

  const [active, setActive] = useState();

  const handleActive = (data) => {
    setActive(data);
  };

  useEffect(() => {
    if (withDetails)
      customTriggerActive().then((data) => {
        if (data.status === "success") {
          setActive(dataActive?.data);
        }
      });
  }, []);

  useEffect(() => {
    if (withDetails) {
      setActive(dataActive?.data);
    } else {
      setActive(data?.data?.articles[0]);
    }
  }, [isLoading, isMutating]);

  useEffect(() => {
    mutate().then((data) => {
      // if (data.status === "success") {
      //   if (withDetails) {
      //     setActive(dataActive?.data?.image);
      //   } else {
      //     setActive(data?.data?.articles[0]);
      //   }
      // }
    });
  }, [language]);

  const dataContent = truncateText(data?.data?.articles[0]?.content);
  const dataContentFormat = createMarkup(dataContent);
  return (
    <div
      className={`bg-white pt-[60px]   relative ${
        withBrief ? "mb-32" : "mb-0"
      } `}
    >
      <div
        className={`mx-auto max-w-7xl px-2 sm:px-4 md:px-8 my-5  lg:mt-12 ${
          withBrief ? "lg:mb-12" : "lg:mb -0"
        }`}
      >
        {isLoading || isMutating ? (
          <HeroSkeleton withBrief={withBrief} />
        ) : (
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-full  lg:w-2/3 rounded-xl    ">
              <NavLink to={`/article-details/${active?._id}`}>
                <img
                  src={active?.image}
                  alt="image"
                  className={` rounded-xl object-cover lg:h-[700px]  ${
                    withBrief ? "mb-8" : "mb-0"
                  } `}
                />
              </NavLink>
              {withBrief && (
                <>
                  <div className="flex gap-5  mb-2.5 ">
                    {active?.tags?.map((tag) => (
                      <span key={tag} className="text-grayDefault">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-bold text-xl text-primary text-opacity-95">
                    {active?.title}
                  </span>
                  <p className="text-black mt-1.5 mb-3">
                    <div dangerouslySetInnerHTML={dataContentFormat} />
                  </p>
                  <span className="text-grayDefault">{active?.date}</span>
                </>
              )}
            </div>
            <div className="flex flex-col gap-10 w-full  lg:w-1/3 mt-8 md:mt-0">
              {data?.data?.articles?.slice(0, 3).map((article) => (
                <ArticleItem
                  key={article?._id}
                  data={article}
                  handleActive={handleActive}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeroSection;
