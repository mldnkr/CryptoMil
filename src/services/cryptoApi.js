import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
  "x-rapidapi-key": "d16635816fmsh108dc8f862e2b34p1ca0eejsn27209bc45e10"
};

const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com";
const params = { id: "90" };

const createRequest = (url) => ({ url, params, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/api/global/`)
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;
