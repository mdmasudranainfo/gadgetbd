import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: builder => ({
    getTrendingProduct: builder.query({
      query: () => '/tranding',
    }),
    getSingleTrendingProduct: builder.query({
      query: id => `/tranding/${id}`,
    }),
  }),
})

export const { useGetTrendingProductQuery, useGetSingleTrendingProductQuery } =
  api
