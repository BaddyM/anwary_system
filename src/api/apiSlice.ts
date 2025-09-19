// src/features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseUrl = 'http://localhost:3002';
export const baseUrl = "https://anwary-backend.pearlnestestates.com";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Summary", "Destinations", "Booking", "Contact", "User", "About", "Gallery"],
    endpoints: (builder) => ({
        //Summary
        getSummary: builder.query({
            query: () => `summary`,
            providesTags: ["Summary"],
        }),

        //About
        getAbout: builder.query({
            query: () => `company-details`,
            providesTags: ["About"],
        }),

        addAbout: builder.mutation({
            query: (data) => ({
                url: `company-details`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["About"]
        }),

        updateAbout: builder.mutation({
            query: ({ id, data }) => ({
                url: `company-details/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["About"]
        }),

        deleteAbout: builder.mutation({
            query: (id) => ({
                url: `company-details/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["About"]
        }),

        //Contact
        getContact: builder.query({
            query: ({ page, limit }) => `contact?page=${page}&limit=${limit}`,
            providesTags: ["Contact"],
        }),

        updateContact: builder.mutation({
            query: ({ id, data }) => ({
                url: `contact/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["Contact"]
        }),

        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contact/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Contact"]
        }),

        //Destinations
        getDestination: builder.query({
            query: ({ page, limit }) => `destination?page=${page}&limit=${limit}`,
            providesTags: ["Destinations"],
        }),

        addDestination: builder.mutation({
            query: (data) => ({
                url: `destination/create`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Destinations"]
        }),

        updateDestination: builder.mutation({
            query: ({ id, data }) => ({
                url: `destination/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["Destinations"]
        }),

        deleteDestination: builder.mutation({
            query: (id) => ({
                url: `destination/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Destinations"]
        }),

        //Gallery
        getGallery: builder.query({
            query: ({ page, limit }) => `gallery?page=${page}&limit=${limit}`,
            providesTags: ["Gallery"],
        }),

        addGallery: builder.mutation({
            query: (data) => ({
                url: `gallery`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Gallery"]
        }),

        updateGallery: builder.mutation({
            query: ({ id, data }) => ({
                url: `gallery/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["Gallery"]
        }),

        deleteGallery: builder.mutation({
            query: (id) => ({
                url: `gallery/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Gallery"]
        }),

        //Booking
        getBooking: builder.query({
            query: ({ page, limit }) => `booking?page=${page}&limit=${limit}`,
            providesTags: ["Booking","Summary"],
        }),

        addBooking: builder.mutation({
            query: (data) => ({
                url: `booking/create`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Booking","Summary"]
        }),

        updateBooking: builder.mutation({
            query: ({ id, data }) => ({
                url: `booking/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["Booking","Summary"]
        }),

        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `booking/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Booking","Summary"]
        }),

        //User
        userLogin: builder.mutation({
            query: (data) => ({
                url: `user/login`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["About"]
        }),
    }),
});

// Auto-generated hooks
export const {
    useGetSummaryQuery,
    useGetAboutQuery,
    useAddAboutMutation,
    useDeleteAboutMutation,
    useUpdateAboutMutation,
    useGetContactQuery,
    useUpdateContactMutation,
    useDeleteContactMutation,
    useGetDestinationQuery,
    useAddDestinationMutation,
    useUpdateDestinationMutation,
    useDeleteDestinationMutation,
    useGetGalleryQuery,
    useAddGalleryMutation,
    useUpdateGalleryMutation,
    useDeleteGalleryMutation,
    useGetBookingQuery,
    useAddBookingMutation,
    useUpdateBookingMutation,
    useDeleteBookingMutation,
    useUserLoginMutation,
} = apiSlice;
