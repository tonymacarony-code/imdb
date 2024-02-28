import { BASE_URL } from './../../../config/base_url';
// Import the createApi and fetchBaseQuery functions from the RTK Query library
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API service using the createApi function
export const moviesApi = createApi({

    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),

    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => 'movies', // Assuming 'movies' is the endpoint to fetch movies
        })
    }),
});

export const { useGetMoviesQuery } = moviesApi;
