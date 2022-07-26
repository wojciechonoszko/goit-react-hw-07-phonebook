import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookAPI = createApi({
  reducerPath: 'phonebookAPI',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62de6eb09c47ff309e733240.mockapi.io/',
  }),

  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
      providesTags: ['Contact'],
    }),
    addContact: build.mutation({
      query: contact => ({
        url: 'contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),
    removeContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = phonebookAPI;
