// 1. Import utilities from `astro:content`
import { string } from 'astro/zod';
import { defineCollection,  z, type SchemaContext } from 'astro:content';

// 2. Define your collection(s)
const allNewsletters
 = defineCollection({
  type: 'content',
  schema: z.object({
      title: z.string(),
      date: z.date(),

})});

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

const allProjects = defineCollection({ 
  type: 'content',
  schema: ({ image }: SchemaContext) => 
      z.object({
        title: z.string(),
        href: z.string(),
        createDate: z.date(),
        finishDate: z.date(),
        desc: z.string(),
        // thumb: z.object({
        //   src: image(),
        //   alt: z.string()
        // }),
        // image: z.object({
        //     src: image(),
        //     alt: z.string(),
        // }),
        categories: z.array(z.string()),
        icons: z.array(z.string()),
        featured: z.boolean(),
        collab: z.boolean(),
        Nsfw: z.boolean().optional(),
        Dd: z.boolean().optional(),
    }),
});

const allQuestions = defineCollection({ 
  type: 'content',
  schema: ({ image }: SchemaContext) => 
      z.object({
        user: z.string(),
        href: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        question: z.string(),
    }),
});


const allCharacters
 = defineCollection({
  type: 'content',
  schema: ({ image }: SchemaContext) => 
        z.object({
          name: z.string(),
          age: z.string(),
          presentation: z.string(),
          orientation: z.string(),
})});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'entries': allEntries,
  'projects': allProjects,
  'newsletter': allNewsletters,
  'questions': allQuestions,
};