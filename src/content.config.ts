import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { STACK, getTopic } from './data/stack';

const sectionIds = STACK.map((s) => s.id);

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    /** Display title of the note. */
    title: z.string(),
    /** One-sentence abstract shown in lists and on the article page. Optional. */
    description: z.string().optional(),
    /** Date of writing; used for ordering and the "recent" list. */
    date: z.coerce.date(),
    /** What kind of entry this is. Questions surface on the home page. */
    status: z.enum(['note', 'study', 'question']).default('note'),
    /** Section id in the Intelligence Stack (see src/data/stack.ts). */
    section: z.enum(sectionIds as [string, ...string[]]),
    /** Topic id within that section. */
    topic: z.string(),
    tags: z.array(z.string()).default([]),
    /** Slugs of related articles, rendered as cross-links at the end. */
    related: z.array(z.string()).default([]),
    /** Bibliographic entries, rendered as a references list at the end. */
    references: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };

/** Resolve an article's position in the stack, failing loudly if misconfigured. */
export function resolvePosition(sectionId: string, topicId: string) {
  const section = STACK.find((s) => s.id === sectionId);
  if (!section) {
    throw new Error(
      `Unknown section "${sectionId}". Valid ids: ${sectionIds.join(', ')}`,
    );
  }
  const topic = getTopic(sectionId, topicId);
  if (!topic) {
    throw new Error(
      `Unknown topic "${topicId}" in section "${sectionId}". Valid ids: ${section.topics
        .map((t) => t.id)
        .join(', ')}`,
    );
  }
  return { section, topic };
}
