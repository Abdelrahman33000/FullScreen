import { useParams } from "react-router-dom";
import { API_SERVICES_URLS } from "../../../../data";
import { useSWRHook, useSWRMutationHook } from "../../../../hooks";
import WriteComment from "../WriteComment";
import { formatDate } from "../../../../utils";
import { useTranslation } from "react-i18next";

export const ArticleDetails = () => {
  const { t } = useTranslation();

  let { id } = useParams();

  const { data, mutate } = useSWRHook(API_SERVICES_URLS.ARTICLE_DETAILS(id));

  const { customTrigger: addLike, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.ADD_LIKE(id),
    "POST"
  );

  const handleLike = () => {
    if (isMutating) return;
    addLike().then((data) => {
      if (data.statusCode == 200) mutate();
    });
  };
  function createMarkup(data) {
    return { __html: data };
  }

  const dataContent = createMarkup(data?.data?.content);

  return (
    <div className="relative pb-12">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8 text-justify">
        <div className="p-2">
          <div className="flex gap-5  mb-3 ">
            {data?.data?.tags?.map((tag) => (
              <span key={tag} className="text-grayDefault">
                {tag}
              </span>
            ))}
          </div>
          <span className="font-bold text-xl text-primary text-opacity-95">
            {data?.data?.title}
          </span>
          <span className="text-grayDefault block mt-2.5">
            {formatDate(data?.data?.createdAt)}
          </span>

          <p className="text-black  mb-3 mt-3 font-[400]">
            {/* {data?.data?.content} */}
            <div dangerouslySetInnerHTML={dataContent} />
          </p>

          <div className="bg-secondary flex gap-10 text-black font-medium p-5 rounded-lg mt-12 mb-5">
            <div className="flex gap-2 items-center">
              <img
                src="/like.svg"
                alt="like"
                className=" object-cover h-6 w-6 cursor-pointer"
                onClick={handleLike}
              />
              <span>{data?.data?.likes}</span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/comment.svg"
                alt="comment"
                className=" object-cover h-6 w-6"
              />
              <span>{data?.data?.comments}</span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/share.svg"
                alt="like"
                className=" object-cover h-6 w-6"
              />
              <span>{t("articles.form.share")} </span>
            </div>
          </div>
        </div>
        <WriteComment articleId={data?.data?._id} mutateArticle={mutate} />
      </div>
    </div>
  );
};

export default ArticleDetails;
