import { useTranslation } from "react-i18next";
import { API_SERVICES_URLS } from "../../../../data";
import { useSWRHook } from "../../../../hooks";
import ArticleItem from "../ArticleItem";
import ArticleItemSkeleton from "../Skeletons/ArticleItemSkeleton";
import { useEffect } from "react";

export const LatestArticles = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { data, isLoading, mutate } = useSWRHook(
    API_SERVICES_URLS.ALL_ARTICLES
  );

  useEffect(() => {
    mutate();
  }, [language]);

  return (
    <div className="bg-secondary pt-7 md:pt-2   relative pb-12">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8 my-5 lg:my-12">
        <h2 className="text-xl font-[700] text-start text-primary mb-5 ps-3 border-s-2 border-primary">
          {t("articles.latestArticles")}{" "}
        </h2>
        <div className="flex flex-wrap justify-center items-center  gap-7  ">
          {isLoading
            ? [1, 2, 3, 4].map((item) => (
                <ArticleItemSkeleton key={item} isFull={true} />
              ))
            : data?.data?.articles?.map((article) => (
                <ArticleItem
                  classes="flex-col w-full sm:w-[40%] md:w-[30%] lg:w-[25%] my-5 h-[310px]"
                  key={article?._id}
                  data={article}
                  isFull={true}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
