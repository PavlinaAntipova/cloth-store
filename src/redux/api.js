import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://evil-spell-95875.herokuapp.com/api
// http://localhost:8000/api

export const offersApi = createApi({
    reducerPath: 'offers',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://evil-spell-95875.herokuapp.com/api', prepareHeaders: (headers) => {
        headers.set('Access-Control-Allow-Origin', '*')
        return headers;
    },
}),
    tagTypes: ['Offers'],
    endpoints: (builder) => {
        return {
            getOffers: builder.query({
                query: () => '/offers',
                providesTags: ['Offers']
            })
        }
    },
});

export const {
    useGetOffersQuery,
} = offersApi;