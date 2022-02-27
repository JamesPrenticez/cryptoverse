import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeader = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '06117c7890msh201d27b0802b288p1dd309jsnb77b0487c999'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) => ({ url, headers: cryptoApiHeader})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/')
    })
  })
})

export const { useGetCryptosQuery } = cryptoApi;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//   }
// };

