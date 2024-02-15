import useSWR from "swr";
import axios from "axios";
import { API_ENDPOINT } from "../../../data";
import { useTranslation } from "react-i18next";

const useFetcher = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const fetcher = async ([url, method, options]) => {
    try {
      const response = await axios({
        url,
        method,
        ...options,
        headers: { "Accept-Language": language === "ar" ? "ar" : "en" },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  };
  return { fetcher };
};

export const useSWRHook = (url, options = {}, config = {}) => {
  const { fetcher } = useFetcher();
  const { data, error, isLoading, mutate } = useSWR(
    [`${API_ENDPOINT}${url}`, "get", options],
    fetcher,
    config
  );
  return { data, error, isLoading, mutate };
};

export default useSWRHook;
