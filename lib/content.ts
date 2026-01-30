// Content Management - reads from JSON files in /content directory
import fs from 'fs';
import path from 'path';

// Content directory path
const contentDir = path.join(process.cwd(), 'content');

// Helper to read JSON file
function readJSON<T>(filePath: string): T | null {
  try {
    const fullPath = path.join(contentDir, filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(content) as T;
  } catch (error) {
    console.warn(`Could not read content file: ${filePath}`, error);
    return null;
  }
}

// Types
export interface SiteSettings {
  siteTitle: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    instagram: string;
    instagramUrl: string;
  };
}

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface AboutContent {
  pageTitle: string;
  pageSubtitle: string;
  stats: { value: string; label: string }[];
  story: string;
  mission: string;
  vision: string;
  whyChooseUs: { title: string; description: string; icon: string }[];
}

export interface ContactContent {
  pageTitle: string;
  pageSubtitle: string;
  businessHours: {
    weekdays: string;
    weekend: string;
  };
  mapEmbedUrl: string;
}

export interface EWarrantyContent {
  pageTitle: string;
  pageSubtitle: string;
  benefits: { title: string; description: string; icon: string }[];
  whatsCovered: string[];
  importantNotes: string[];
}

export interface PPFProduct {
  slug: string;
  name: string;
  description: string;
  features: string[];
  specs: {
    exterior: string;
    interior: string;
  };
  warranty: string;
  images: string[];
}

export interface WindowFilms {
  slug: string;
  name: string;
  description: string;
  features: string[];
  images: string[];
}

export interface PreecutEdition {
  slug: string;
  name: string;
  description: string;
  categories: string[];
  videos: string[];
}

// Content getters
export function getSiteSettings(): SiteSettings | null {
  return readJSON<SiteSettings>('settings/global.json');
}

export function getHomeContent(): HomeContent | null {
  return readJSON<HomeContent>('pages/home.json');
}

export function getAboutContent(): AboutContent | null {
  return readJSON<AboutContent>('pages/about.json');
}

export function getContactContent(): ContactContent | null {
  return readJSON<ContactContent>('pages/contact.json');
}

export function getEWarrantyContent(): EWarrantyContent | null {
  return readJSON<EWarrantyContent>('pages/e-warranty.json');
}

export function getPPFProducts(): PPFProduct[] {
  const products: PPFProduct[] = [];
  const ppfDir = path.join(contentDir, 'products/ppf');

  try {
    const files = fs.readdirSync(ppfDir);
    for (const file of files) {
      if (file.endsWith('.json')) {
        const product = readJSON<PPFProduct>(`products/ppf/${file}`);
        if (product) {
          products.push(product);
        }
      }
    }
  } catch (error) {
    console.warn('Could not read PPF products directory', error);
  }

  return products;
}

export function getPPFProduct(slug: string): PPFProduct | null {
  return readJSON<PPFProduct>(`products/ppf/${slug}.json`);
}

export function getWindowFilms(): WindowFilms | null {
  return readJSON<WindowFilms>('products/window-films.json');
}

export function getPreecutEdition(): PreecutEdition | null {
  return readJSON<PreecutEdition>('products/precut-edition.json');
}

// Get all product slugs for static generation
export function getAllProductSlugs(): string[] {
  const slugs: string[] = [];

  // PPF products
  const ppfProducts = getPPFProducts();
  slugs.push(...ppfProducts.map(p => p.slug));

  // Window films
  const windowFilms = getWindowFilms();
  if (windowFilms) slugs.push(windowFilms.slug);

  // Precut edition
  const precut = getPreecutEdition();
  if (precut) slugs.push(precut.slug);

  return slugs;
}
