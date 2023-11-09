import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostModal } from "../models/post.model";
import { BASE_URL } from "../constants";

export const postsApi = createApi({
	reducerPath: "postsApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["Post"],
	endpoints: (builder: any) => ({
		posts: builder.query({
			query: () => {
				return {
					url: `posts?_sort=createdAt&_order=desc`,
					method: "GET"
				};
			},
			providesTags: ["Post"]
		}),
		addPost: builder.mutation({
			query: (body: PostModal) => {
				return {
					url: `posts1`,
					method: "POST",
					body
				};
			},
			invalidatesTags: ["Post"]
		})
	})
});

export const { usePostsQuery, useAddPostMutation } = postsApi;
