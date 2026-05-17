import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const pageSchema = z.object({
  locale: z.enum(["pl", "en", "de"]).default("pl"),
  translationKey: z.string().optional(),
  canonicalPath: z.string(),
  sourceUrl: z.url().optional(),
  pageType: z.string().default("page"),
  title: z.string(),
  seoTitle: z.string().optional(),
  description: z.string().optional(),
  heroImage: z.string().optional(),
  gallery: z.array(z.string()).default([]),
  booking: z
    .object({
      enabled: z.boolean().default(false),
      verifiedParamsOnly: z.boolean().default(true),
    })
    .default({ enabled: false, verifiedParamsOnly: true }),
});

const plPages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pl/pages" }),
  schema: pageSchema,
});

const plRooms = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pl/rooms" }),
  schema: pageSchema,
});

const plOffers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pl/offers" }),
  schema: pageSchema,
});

const enPages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/en/pages" }),
  schema: pageSchema.extend({
    locale: z.literal("en").default("en"),
  }),
});

const dePages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/de/pages" }),
  schema: pageSchema.extend({
    locale: z.literal("de").default("de"),
  }),
});

export const collections = {
  plPages,
  plRooms,
  plOffers,
  enPages,
  dePages,
};
