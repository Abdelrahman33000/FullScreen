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

export const FormSignUp = () => {
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
      <div className="px-2 mx-auto max-w-7xl sm:px-4 md:px-8 md:pb-6 md:pt-5">
        <div className="flex flex-col gap-10 sm:flex-row">
      
          <div className="w-full sm:w-[100%]">
            <form onSubmit={onSubmit} className="">
              <div className="gap-3 ">
                <div className="w-full sm:w-1/2 ">
                  <FloatingInput
                    id="name"
                    className="text-black rounded-lg w-96"
                    label={t('Name')}

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
                <div className="my-5 w-96">
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
              <div className="">
          
                <div className="my-5 sm:w-1/2 w-96">
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
                        className="py-0 w-96"
                        placeholder={t("رقم الهاتف *")}
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
                



                <div className="w-full sm:w-1/2">
                  <FloatingInput
                  type="password"
                    id="password"
                    className= "text-black rounded-lg w-96"
                    label={t("Password")}
                    inputSize="medium"
                    // label={t("contactUs.form.email")}
                    {...register("password", {
                      ...FORM_VALIDATION.password,
                      onChange: () => clearErrorOnChange("password"),
                    })}
                    helperText={getFieldHelperText(
                      "error",
                      t(
                        `enter ur password`
                      )
                    )}
                    error={!!errors?.password}
                  />
                </div>

                <input type="checkbox" name="" id="" />  <span >{t("I agree with the terms and conditions")} </span>
              </div>

              
           
              <Button
                type="submit"
                className="py-3 mt-6 mb-16 font-medium w-96"
                loading={isMutating}
                buttonLoadingProps={{
                  loadingText: t("contactUs.form.loading"),
                }}
              >
                {/* {t("contactUs.form.submitBtn")} */}
                {t('Create Account')}

              </Button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default FormSignUp;
