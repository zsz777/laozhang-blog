import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章集合：src/content/posts 下每个 .md 文件就是一篇文章
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
  }),
});

export const collections = { posts };
