import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const newsletter = await getCollection("newsletter")
    return rss({
        title: 'RUDY TUESDAY’S BAD NEWS',
        // `<description>` field in output xml
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#site
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            date: post.data.date,
            // Compute RSS link from post `id`
            // This example assumes all posts are rendered as `/blog/[id]` routes
            // link: `/blog/${post.id}/`,
            content: sanitizeHtml(parser.render(newsletter.body)),
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
          })),
        // (optional) inject custom xml
        // customData: `<language>en-us</language>`,
  });
}