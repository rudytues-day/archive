// 1. Import utilities from `astro:content`
import { string } from 'astro/zod';
import { defineCollection,  z, type SchemaContext } from 'astro:content';
// 2. Define your collection(s)
const allEntries = defineCollection({ 
    type: 'content',
    schema: ({ image }: SchemaContext) => 
        z.object({
            title: z.string(),
            date: z.date(),
            uploadDate: z.date(),
            thumb: z.object({
              src: image(),
              alt: z.string()
            }),
            image: z.object({
                src: image(),
                alt: z.string(),
            }),
            tags: z.array(z.string()),
            icons: z.array(z.string()),
            desc: z.string(),
            gallery: z.boolean(),
            original: z.boolean(),
            medium: z.string(),
            Nsfw: z.boolean().optional(),
            Dd: z.boolean().optional(),
          }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'entries': allEntries,
};