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
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const FormForget = () => {
  const { t } = useTranslation();
const [forget , setForget] =useState(false);
const [inbox , setInbox] =useState(false);
const [change , setChange] =useState(true);
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

          
        { forget && <div className="w-full sm:w-[100%]">
      <p className="my-5"> <b> {t("Restore password")}</b></p>
      <p> <b>{t("Please enter your registered email before")} </b></p>
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
               <NavLink onClick={() => {
                // setForget(false);
                // setInbox(true)
               }
               }>{t("Restore password")} </NavLink> 
              </Button>
            </form>
          </div>}

{inbox &&   <div style={{width:"40%" , margin:"auto"}}>
    <img src="/message.png" alt=""  />
    <h1 className="my-5"> {t("Please check your inbox")} </h1>
    <p> {t("Your account password recovery details have been sent to Your E-mail")}
    
    <b>exampel@gmail.com  </b></p>
    </div>}



   {change && <div>

    <form onSubmit={onSubmit} className="">
              <div className="gap-3 ">
       <p > <b> {t("Change Password")}</b></p>
               <p className="my-5"> {t("message1")} <br />
               {t("message2")}(!@#$%)</p>
                

              <div className="w-full sm:w-1/2">
                  <FloatingInput
                  type="password"
                    id="password"
                    className= "text-black rounded-lg w-96"
                    label={t("New Password")}
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
                

                
                <div className="w-full sm:w-1/2">
                  <FloatingInput
                  type="password"
                    id="password"
                    className= "text-black rounded-lg w-96"
                    label={t("Confirm Password")}
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

              </div>

              
           
              <Button
                type="submit"
                className="py-3 mt-6 mb-16 font-medium w-96"
                loading={isMutating}
                buttonLoadingProps={{
                  loadingText: t("contactUs.form.loading"),
                }}
              >
                {t("Change Password")}
                
              </Button>
            </form>

            
  
                
    </div>}


          
        </div>
      </div>
   
  );
};

export default FormForget;
