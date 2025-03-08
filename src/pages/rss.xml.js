import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const newsletters = await getCollection("newsletters")
    return rss({
        title: 'RUDY TUESDAY’S BAD NEWS',
        site: context.site,
        items: newsletters.map((news) => ({
            title: news.data.title,
            description: news.data.description || '',
            date: news.data.date,
            pubDate: news.data.uploadDate,
            link: `/newsletter/${news.slug}/`,
            content: sanitizeHtml(parser.render(post.body), {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
            ...post.data,
          }))
        })
}
