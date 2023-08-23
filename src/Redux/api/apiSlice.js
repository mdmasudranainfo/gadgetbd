import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/db.json' }),
  endpoints: builder => ({
    getTrendingProduct: builder.query({
      query: () => '/',
    }),
    getSingleTrendingProduct: builder.query({
      query: id => `/tranding/${id}`,
    }),
  }),
})

export const { useGetTrendingProductQuery, useGetSingleTrendingProductQuery } =
  api
