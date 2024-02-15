import { useTranslation } from "react-i18next";
import { Button } from "../../../../components";

export const Description = ({ setSelectedIndex, descriptionContent }) => {
  const { t } = useTranslation();

  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <div className="mt-10 mb-20 p-2">
      <h2 className="text-black font-medium text-xl mb-4">
        {t("hiring.hiringDescription.descriptionWrapper.jobDescTitle")}
      </h2>
      <p
        className="text-black text-justify max-w-4xl mb-7"
        dangerouslySetInnerHTML={createMarkup(descriptionContent)}
      />

      <span className="text-black font-medium text-xl mb-3">
        {t("hiring.hiringDescription.descriptionWrapper.requirementsTitle")}
      </span>
      <ul className="list-disc flex flex-col gap-1 text-black mb-10">
        <li className="ms-7 mt-4">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
        </li>
        <li className="ms-7">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
        </li>
        <li className="ms-7">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
        </li>
        <li className="ms-7">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
        </li>
        <li className="ms-7">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
        </li>
      </ul>
      <Button className=" lg:w-[550px]" onClick={() => setSelectedIndex(1)}>
        {t("hiring.hiringDescription.descriptionWrapper.applyBtn")}
      </Button>
    </div>
  );
};
export default Description;
