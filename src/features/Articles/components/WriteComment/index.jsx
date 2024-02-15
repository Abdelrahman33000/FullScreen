import { Button, FloatingInput, TextArea } from "../../../../components";
import { getFieldHelperText } from "../../../../utils";
import { API_SERVICES_URLS, FORM_VALIDATION } from "../../../../data";
import useForm from "../../../../lib/react-hook-form";
import { useSWRMutationHook } from "../../../../hooks";
import { useTranslation } from "react-i18next";

export const WriteComment = ({ articleId, mutateArticle }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    addComment(data).then(() => {
      reset();
      mutateArticle();
    });
  });

  const { customTrigger: addComment, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.ADD_COMMENT(articleId),
    "POST"
  );

  return (
    <form onSubmit={onSubmit} className="md:w-2/3">
      <h4 className="text-primary text-lg font-medium mb-5">
        {t("articles.form.title")}
      </h4>
      <div className="flex gap-3">
        <div className="w-full sm:w-1/2">
          <FloatingInput
            id="name"
            className=" text-black  rounded-lg"
            label={t("articles.form.name")}
            {...register("name", {
              ...FORM_VALIDATION.fullName,
              onChange: () => clearErrorOnChange("name"),
            })}
            helperText={getFieldHelperText(
              "error",
              t(`articles.form.errorMessages.name.${errors["name"]?.type}`)
            )}
            error={!!errors?.name}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <FloatingInput
            id="البريد الالكتروني"
            label={t("articles.form.email")}
            {...register("email", {
              ...FORM_VALIDATION.email,
              onChange: () => clearErrorOnChange("email"),
            })}
            helperText={getFieldHelperText(
              "error",
              t(`articles.form.errorMessages.email.${errors["email"]?.type}`)
            )}
            error={!!errors?.email}
          />
        </div>
      </div>
      <TextArea
        rows="14"
        placeholder={t("articles.form.comment")}
        id="comment"
        className="  !bg-secondary"
        {...register("comment", {
          ...FORM_VALIDATION.comment,
          onChange: () => clearErrorOnChange("comment"),
        })}
        helperText={getFieldHelperText(
          "error",
          t(`articles.form.errorMessages.comment.${errors["comment"]?.type}`)
        )}
        error={!!errors?.comment}
      />
      <Button
        type="submit"
        className="w-full mt-6 py-3 font-medium mb-16"
        loading={isMutating}
        buttonLoadingProps={{ loadingText: t("articles.form.loading") }}
      >
        {t("articles.form.submitButton")}{" "}
      </Button>
    </form>
  );
};

export default WriteComment;
