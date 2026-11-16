import { defineSageCollections } from "astro-sage/content";
import config from "../sage.config";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sageCollections = defineSageCollections({
  author: config.site.author,
});

const entries = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/entries" }),
  schema: z.object({
    locale: z.enum(["zh-CN", "en"]),
    kind: z.enum(["note", "project", "essay"]),
    title: z.string(),
    description: z.string(),
    series: z.string().optional(),
    translationKey: z.string().optional(),
    pubDatetime: z.date().optional(),
    modDatetime: z.date().optional(),
    author: z.string().default(config.site.author),
    draft: z.boolean().optional(),
  }),
});

export const collections = { ...sageCollections, entries };
