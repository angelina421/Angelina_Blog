import { getCollection } from 'astro:content';
import type { Locale } from './content';

export async function entryPaths(locale: Locale, kind: 'note' | 'project' | 'essay') {
  const entries = await getCollection('entries');
  return entries
    .filter((entry) => entry.data.locale === locale && entry.data.kind === kind && !entry.data.draft)
    .map((entry) => ({
      params: { slug: entry.id.split('/').slice(2).join('/') },
      props: { entry },
    }));
}
