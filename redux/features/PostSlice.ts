import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface Post {
  id: number | string
  days: number;
  type: string;
  condition: string;
  images: string[];
  title: string;
  country: string;
  city: string;
  streetName: string;
  streetNumber: string;
  floorNumber: number;
  aptNumber: string;
  price: number;
  description: string;
}



export const postsApi = createApi({
  reducerPath: "postsApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getPostsByCondition: builder.query<Post[], string>({
      query: (condition) => `posts/condition/${condition}`,
    }),
    getPosts: builder.query<Post[], string>({
      query: () => "posts",
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
    updatePost: builder.mutation<Post, { id: number; updatedPost: Partial<Post> }>({
      query: ({ id, updatedPost }) => ({
        url: `posts/${id}`,
        method: "PATCH",
        body: updatedPost,
      }),
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
  
    }),
  }),
});


export const {
  useGetPostsByConditionQuery,
  useGetPostsQuery, // GET all
  useCreatePostMutation, // POST
  useGetPostQuery, // GET one
  useUpdatePostMutation, // PATCH (Update)
  useDeletePostMutation, // DELETE

} = postsApi;


