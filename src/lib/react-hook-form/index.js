import {
  useForm,
  Controller,
  useFieldArray,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useCustomForm = (props) => {
  const defaultProps = props
    ? { ...props, reValidateMode: props.reValidateMode || "onSubmit" }
    : { reValidateMode: "onSubmit" };

  const formData = useForm(defaultProps);

  const clearErrorOnChange = (name) => {
    formData.clearErrors(name);
  };

  return { ...formData, clearErrorOnChange };
};

export default useCustomForm;

export { Controller, useFieldArray, FormProvider, useFormContext };
