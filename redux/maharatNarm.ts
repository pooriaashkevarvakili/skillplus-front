import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}`;

export const maharatNarm = createApi({
  reducerPath: 'maharatNarm',
  baseQuery: fetchBaseQuery({ baseUrl: apiEndpoint }),
  endpoints: (builder) => ({
    getMaharatNarm: builder.query({
      query: () => '/user/maharatNarm',
    }),
  }),
});

export const { useGetMaharatNarmQuery } = maharatNarm;