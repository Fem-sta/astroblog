import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const posts = await getCollection('posts');

export const GET = () =>
  rss({
    title: 'Astro Blog',
    description: 'Description of blog',
    site: import.meta.env.SITE,
    items: posts.map(post => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      date: post.data.date,
      description: post.data.description,
      customData: `<author>${post.data.author}</author>`
    }))
  });

