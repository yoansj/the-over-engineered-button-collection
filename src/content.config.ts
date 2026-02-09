import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const buttons = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/contributions",
  }),
  schema: z.object({
    name: z.string(),
    author: z.string(),
    description: z.string(),
    technologies: z.array(z.string())
  })
})

export const collections = { buttons }