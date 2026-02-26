import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const entries = await getCollection("entries");
  return rss({
    title: 'RUDY TUESDAY’S ART ARCHIVE',
    description: '',
    site: context.site,
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
    },
    items: entries.map((entry) => ({
      title: entry.data.title,
      customData: `<media:content
        url="${context.site.origin + entry.data.ogimg?.src.src}" />`,
      description: entry.data.description,
      site: context.site,
      pubDate: entry.data.uploadDate,
      link: `archive/entries/${entry.slug}`,
      content: sanitizeHtml(parser.render(entry.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
    })),
    customData: `<language>en-us</language>`,
  });
}