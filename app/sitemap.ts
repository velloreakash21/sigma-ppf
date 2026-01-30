import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sigmappf-website.vercel.app';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/e-warranty',
    '/products',
  ];

  // Product pages
  const productPages = [
    '/products/ultra-clear',
    '/products/gloss-black',
    '/products/matte',
    '/products/satin-matte',
    '/products/colour-series',
    '/products/window-films',
    '/products/precut-edition',
  ];

  const allPages = [...staticPages, ...productPages];

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/products') ? 0.8 : 0.6,
  }));
}
