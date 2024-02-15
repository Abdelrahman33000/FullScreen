import axios from "lib/axios";

export const fetcher = async ([url, method, options]) => {
  try {
    const response = await axios({
      url,
      method,
      ...options,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
