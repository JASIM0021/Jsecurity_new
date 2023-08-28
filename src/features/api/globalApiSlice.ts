import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let url = "https://android-manager.onrender.com";
let API_URL = `${url}/api/v1/`;
// let API_URL = "https://dangerous-eel-4.telebit.io";

const globalApiSlice = createApi({
  reducerPath: "jsecurity",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // prepareHeaders: async (headers, { getState, endpoint }) => {
    // //   const token = JSON.parse(localStorage.getItem('x-access-token'));
    // //   if (token) {
    // //     headers.set('x-access-token', token);
    // //   }

    //   return headers;
    // },
  }),
  tagTypes: ["jsecurity", "getandpost"],
  endpoints: (builder) => ({}),
});

export default globalApiSlice;
