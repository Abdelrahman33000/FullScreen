import axios from "../../lib/axios";
import { useSWRMutation } from "../../lib/swr";

export const useCustomFetcher = () => {
  const fetcher = async ([url, method, options], { arg }) => {
    try {
      const response = await axios({
        url,
        method,
        ...(arg ? arg : options),
        headers: { "Accept-Language": "ar" },
      });

      return response.data;
    } catch (error) {
      return error;
    }
  };
  return fetcher;
};

export const useSWRMutationHook = (
  url,
  method = "get",
  options = {},
  config = {}
) => {
  const fetcher = useCustomFetcher();
  const { trigger, data, error, isMutating } = useSWRMutation(
    [url, method, options],
    fetcher,
    config
  );

  function customTrigger(body) {
    const data = { data: body };
    return trigger(data);
  }

  return {
    trigger,
    customTrigger,
    data,
    error,
    isMutating,
  };
};

export default useSWRMutationHook;
