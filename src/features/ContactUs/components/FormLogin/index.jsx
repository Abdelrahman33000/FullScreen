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
import { Link } from "react-router-dom";

export const FormLogin = () => {
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
              <div className="gap-3 ">
          
               
                



                <div className="w-full sm:w-1/2" >
                  <FloatingInput
                  type="password"
                    id="password" 
                    
                    className= "text-black rounded-lg w-96 "
                    label={t("Password")}
                    inputSize="medium"
                    // label={t("contactUs.form.email")}
                    {...register("password", {
                      ...FORM_VALIDATION.password,
                      onChange: () => clearErrorOnChange("password"),
                    })}
                    helperText={getFieldHelperText(
                      "error",
                      t(`enter ur password`
                      )
                    )}
                    error={!!errors?.password}
                  />
                </div>
<div className="flex justify-between">
  
<div>
                   <input  type="checkbox" name="" id="" />  <span > {t('Remember me')}</span>
                   
</div>             
    <Link to={"/forgetPassword"} className="me-10">  {t('Forget  Password')}</Link>
</div>
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
                    {t('login')}

              </Button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default FormLogin;
