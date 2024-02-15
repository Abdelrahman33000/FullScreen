import { useParams } from "react-router-dom";
import {
  Button,
  FileInput,
  HelperText,
  PhoneInput,
  FloatingInput,
  TextArea,
} from "../../../../components";
import { API_SERVICES_URLS, FORM_VALIDATION } from "../../../../data";
import { ExclamationTriangleIconOutline } from "../../../../lib/@heroicons";
import useForm, { Controller } from "../../../../lib/react-hook-form";
import { getFieldHelperText } from "../../../../utils";
import ar from "react-phone-input-2/lang/ar.json";
import { useSWRMutationHook } from "../../../../hooks";
import { useTranslation } from "react-i18next";

export const ApplyForm = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
    control,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("notes", data.notes);
    formData.append("phone", data.phone);
    formData.append("specialization", data.specialization);
    formData.append("location", data.location);
    formData.append("email", data.email);
    formData.append("degree", data.degree);
    // sendForm(formData).then((data) => {
    //   if (data.statusCode == 200) {
    //     reset();
    //   }
    // });
  });

  const { customTrigger: sendForm, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.APPLY_JOB(id),
    "POST"
  );

  return (
    <div className="mt-5">
      <form onSubmit={onSubmit} className="md:w-2/3">
        <h4 className="text-black text-xl font-bold mb-10">
          {t("hiring.applyForm.title")}
        </h4>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="w-full sm:w-1/2">
            <FloatingInput
              id="firstName"
              className=" text-black  rounded-lg"
              label={t("hiring.applyForm.firstName")}
              {...register("firstName", {
                ...FORM_VALIDATION.firstName,
                onChange: () => clearErrorOnChange("firstName"),
              })}
              helperText={getFieldHelperText(
                "error",
                t(
                  `hiring.applyForm.errorMessages.firstName.${errors["firstName"]?.type}`
                )
              )}
              error={!!errors?.firstName}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <FloatingInput
              id="lastName"
              className=" text-black  rounded-lg"
              label={t("hiring.applyForm.lastName")}
              {...register("lastName", {
                ...FORM_VALIDATION.lastName,
                onChange: () => clearErrorOnChange("lastName"),
              })}
              helperText={getFieldHelperText(
                "error",
                t(
                  `hiring.applyForm.errorMessages.lastName.${errors["lastName"]?.type}`
                )
              )}
              error={!!errors?.lastName}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="w-full sm:w-1/2">
            <FloatingInput
              id="البريد الالكتروني"
              label={t("hiring.applyForm.email")}
              {...register("email", {
                ...FORM_VALIDATION.email,
                onChange: () => clearErrorOnChange("email"),
              })}
              helperText={getFieldHelperText(
                "error",
                t(
                  `hiring.applyForm.errorMessages.email.${errors["email"]?.type}`
                )
              )}
              error={!!errors?.email}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Controller
              control={control}
              name="phone"
              rules={{
                ...FORM_VALIDATION.mobile,
                onChange: () => clearErrorOnChange("phone"),
              }}
              render={({ field: { ref, onChange, ...field } }) => (
                <PhoneInput
                  id="phone-input"
                  className="py-0"
                  placeholder="Enter your phone number"
                  inputSize="medium"
                  inputProps={{
                    ref,
                  }}
                  localization={ar}
                  error={!!errors.phone}
                  helperText={getFieldHelperText(
                    "error",
                    t(
                      `hiring.applyForm.errorMessages.phone.${errors["phone"]?.type}`
                    )
                  )}
                  onChange={(_, __, ___, value) => onChange(value)}
                  {...field}
                />
              )}
            />
            <span className="text-sm text-black -mt-1 block ">
              {t("hiring.applyForm.phoneNote")}
            </span>
          </div>
        </div>
        <div className="w-full mb-4">
          <FloatingInput
            id="location"
            className="  text-black  rounded-lg mb-4"
            label={t("hiring.applyForm.location")}
            {...register("location", {
              ...FORM_VALIDATION.location,
              onChange: () => clearErrorOnChange("location"),
            })}
            helperText={getFieldHelperText(
              "error",
              t(
                `hiring.applyForm.errorMessages.location.${errors["location"]?.type}`
              )
            )}
            error={!!errors?.location}
          />
        </div>

        <div className="w-full mb-7">
          <span className="text-xl text-black text-medium mt-7 mb-5 block">
            {t("hiring.applyForm.profile")}
          </span>
          <FloatingInput
            id="specialization"
            className=" text-black  rounded-lg mb-4"
            label={t("hiring.applyForm.specialization")}
            {...register("specialization", {
              ...FORM_VALIDATION.specialization,
              onChange: () => clearErrorOnChange("specialization"),
            })}
            helperText={getFieldHelperText(
              "error",
              t(
                `hiring.applyForm.errorMessages.specialization.${errors["specialization"]?.type}`
              )
            )}
            error={!!errors?.specialization}
          />
        </div>
        <div className="w-full mb-7">
          <FloatingInput
            id="degree"
            className="  text-black  rounded-lg"
            label={t("hiring.applyForm.degree")}
            {...register("degree", {
              ...FORM_VALIDATION.degree,
              onChange: () => clearErrorOnChange("degree"),
            })}
            helperText={getFieldHelperText(
              "error",
              t(
                `hiring.applyForm.errorMessages.degree.${errors["degree"]?.type}`
              )
            )}
            error={!!errors?.degree}
          />
        </div>
        <div>
          <FileInput
            id="file"
            inputSize="small"
            className="bg-secondary text-primary font-bold py-8 "
            label={t("hiring.applyForm.file")}
            {...register("file", {
              validate: (files) => {
                if (files?.length == 0)
                  return t(`hiring.applyForm.errorMessages.file`);
              },
            })}
          />
          <HelperText
            showContent={!!errors.file}
            className="text-red-600 w-full text-xs   min-h-[20px]"
            startIcon={
              <ExclamationTriangleIconOutline className="w-5 h5  text-red-600" />
            }
            text={t(`hiring.applyForm.errorMessages.file`)}
          />
          <HelperText />
        </div>
        <TextArea
          rows="14"
          placeholder={t("hiring.applyForm.notes")}
          id="message"
          className="  !bg-secondary  "
          {...register("notes")}
          withoutHelperText={true}
        />
        <Button
          type="submit"
          className="w-full mt-6 py-3 font-medium mb-16"
          loading={isMutating}
          buttonLoadingProps={{ loadingText: t("hiring.applyForm.loading") }}
        >
          {t("hiring.applyForm.submitBtn")}
        </Button>
      </form>
    </div>
  );
};
export default ApplyForm;
