import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "data.json",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
