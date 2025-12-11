import { defineCollection, z } from 'astro:content';

// Define a schema for your posts
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    author: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
