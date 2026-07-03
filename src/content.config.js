import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    targetKeyword: z.string(),
    productName: z.string(),
    affiliateUrl: z.string().url().optional(),
    rating: z.number().min(0).max(5).optional(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    pricing: z.string().optional(),
    bestFor: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const alternatives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    targetKeyword: z.string(),
    replacedProduct: z.string(),
    alternatives: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const lists = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    targetKeyword: z.string(),
    items: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { reviews, alternatives, lists };