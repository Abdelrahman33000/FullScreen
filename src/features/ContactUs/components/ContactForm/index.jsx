import { useTranslation } from "react-i18next";
import {
  Button,
  FloatingInput,
  PhoneInput,
  TextArea,
} from "../../../../components";
import { API_SERVICES_URLS, FORM_VALIDATION } from "../../../../data";
import { useSWRMutationHook } from "../../../../hooks";
import useForm, { Controller } from "../../../../lib/react-hook-form";
import { getFieldHelperText } from "../../../../utils";
import ar from "react-phone-input-2/lang/ar.json";

export const ContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
    control,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    sendForm(data).then((data) => {
      if (data.statusCode == 200) {
        reset();
      }
    });
  });

  const { customTrigger: sendForm, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.CONTACT_US,
    "POST"
  );
  return (
    <div className="bg-white">
      <div className=" mx-auto max-w-7xl px-2 sm:px-4 md:px-8  pt-10 md:pb-6 md:pt-32">
        <div className="flex flex-col sm:flex-row gap-20">
          <div className="w-full sm:w-[25%] text-primary">
            <div>
              <h4 className="mb-10  text-2xl flex items-center    uppercase  justify-start font-bold  ">
                {t("contactUs.title")}
              </h4>
              <h6 className="mb-7 flex text-md    font-[400]  justify-start">
                {t("footer.contactSection.location")}
              </h6>
              <p className="flex gap-4 items-center mb-4">
                <img src="/phone.svg" alt="phone" />
                <span>966114090010</span>
              </p>
              <p className="flex gap-4 items-center mb-4">
                <img src="/mail.svg" alt="mail" />
                <span>
                  <a href="mailto:info@fullscreem.sa">info@fullscreem.sa</a>
                </span>
              </p>
              <p className="flex gap-4 items-center mb-4">
                <img src="/whatsup.svg" alt="whatsup" />
                <span>+966 5307 005 02</span>
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[75%]">
            <form onSubmit={onSubmit} className="md:w-2/3">
              <h4 className="text-primary text-xl font-bold mb-10">
                {t("contactUs.form.title")}
              </h4>
              <div className="flex gap-3">
                <div className="w-full sm:w-1/2">
                  <FloatingInput
                    id="name"
                    className=" text-black  rounded-lg"
                    label={t("contactUs.form.name")}
                    {...register("name", {
                      ...FORM_VALIDATION.fullName,
                      onChange: () => clearErrorOnChange("name"),
                    })}
                    helperText={getFieldHelperText(
                      "error",
                      t(
                        `contactUs.form.errorMessages.name.${errors["name"]?.type}`
                      )
                    )}
                    error={!!errors?.name}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <FloatingInput
                    id="البريد الالكتروني"
                    label={t("contactUs.form.email")}
                    {...register("email", {
                      ...FORM_VALIDATION.email,
                      onChange: () => clearErrorOnChange("email"),
                    })}
                    helperText={getFieldHelperText(
                      "error",
                      t(
                        `contactUs.form.errorMessages.email.${errors["email"]?.type}`
                      )
                    )}
                    error={!!errors?.email}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-full sm:w-1/2">
                  <FloatingInput
                    id="subject"
                    className=" text-black  rounded-lg"
                    label={t("contactUs.form.subject")}
                    {...register("subject", {
                      ...FORM_VALIDATION.subject,
                      onChange: () => clearErrorOnChange("subject"),
                    })}
                    helperText={getFieldHelperText(
                      "error",
                      t(
                        `contactUs.form.errorMessages.subject.${errors["subject"]?.type}`
                      )
                    )}
                    error={!!errors?.subject}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <Controller
                    control={control}
                    name="mobile"
                    rules={{
                      ...FORM_VALIDATION.mobile,
                      onChange: () => clearErrorOnChange("mobile"),
                    }}
                    render={({ field: { ref, onChange, ...field } }) => (
                      <PhoneInput
                        id="phone-input"
                        className="py-0"
                        placeholder={t("contactUs.form.phone")}
                        inputSize="medium"
                        inputProps={{
                          ref,
                        }}
                        localization={ar}
                        error={!!errors.mobile}
                        helperText={getFieldHelperText(
                          "error",
                          t(
                            `contactUs.form.errorMessages.mobile.${errors["mobile"]?.type}`
                          )
                        )}
                        onChange={(_, __, ___, value) => onChange(value)}
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              <TextArea
                rows="14"
                placeholder={t("contactUs.form.message")}
                id="message"
                className="  !bg-secondary"
                {...register("message", {
                  ...FORM_VALIDATION.message,
                  onChange: () => clearErrorOnChange("message"),
                })}
                helperText={getFieldHelperText(
                  "error",
                  errors.message?.message
                )}
                error={!!errors?.message}
              />
              <Button
                type="submit"
                className="w-full mt-6 py-3 font-medium mb-16"
                loading={isMutating}
                buttonLoadingProps={{
                  loadingText: t("contactUs.form.loading"),
                }}
              >
                {t("contactUs.form.submitBtn")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
