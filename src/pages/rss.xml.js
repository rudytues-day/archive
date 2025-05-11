import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const news = await getCollection("newsletters");
  return rss({
    title: 'RUDY TUESDAY’S BAD NEWS',
    description: '',
    site: context.site,
    items: news.map((letter) => ({
      title: letter.data.title,
      description: letter.data.description,
      site: context.site,
      pubDate: letter.data.uploadDate,
      link: `/newsletter/${letter.slug}`,
      content: sanitizeHtml(parser.render(letter.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
    })),
    customData: `<language>en-us</language>`,
  });
}