import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn
} from "@reduxjs/toolkit/query/react";
import { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  }
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error && result.error.status === 401) {
    localStorage.clear();
    // window.location.href = "/";
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});

export default api;
