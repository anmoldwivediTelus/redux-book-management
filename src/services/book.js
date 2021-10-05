// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllbooks: builder.query({
      query: () => `books`,
    }),
    addBook: builder.mutation({
      query(body) {
        return {
          url: `books/`,
          method: 'POST',
          body,
        }
      },
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllbooksQuery,useAddBookMutation } = pokemonApi