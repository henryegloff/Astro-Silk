import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
    }),
  // schema: z.object({
  //   title: z.string(),
  //   description: z.string(),
  //   date: z.coerce.date(),
  //   image: z.string().optional(),
  // }),
});

export const collections = { blog: postsCollection, projects: postsCollection };
