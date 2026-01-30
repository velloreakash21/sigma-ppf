// Centralized Asset Paths for Sigma PPF Website

export const assets = {
  brand: {
    logo: '/assets/brand/logo.png', // Placeholder - to be provided
    catalogue1: '/assets/brand/catalogue1.jpg',
    catalogue2: '/assets/brand/catalogue2.jpg',
  },

  ppf: {
    ultraClear: [
      '/assets/ppf/ultra-clear/img1.jpg',
      '/assets/ppf/ultra-clear/img2.jpg',
      '/assets/ppf/ultra-clear/img3.jpg',
    ],
    glossBlack: [
      // Placeholder - folder was empty
    ],
    matte: [
      '/assets/ppf/matte/img1.jpg',
      '/assets/ppf/matte/img2.jpg',
    ],
    satinMatte: [
      '/assets/ppf/satin-matte/img1.jpg',
      '/assets/ppf/satin-matte/img2.jpg',
    ],
    colourSeries: {
      lexus: [
        '/assets/ppf/colour-series/lexus1.jpg',
        '/assets/ppf/colour-series/lexus2.jpg',
        '/assets/ppf/colour-series/lexus3.jpg',
        '/assets/ppf/colour-series/lexus4.jpg',
        '/assets/ppf/colour-series/lexus5.jpg',
      ],
      seltos: [
        '/assets/ppf/colour-series/seltos1.jpg',
        '/assets/ppf/colour-series/seltos2.jpg',
      ],
    },
  },

  windowFilms: [
    '/assets/window-films/img1.png',
  ],

  precut: {
    videos: [
      '/assets/precut/video1.mp4',
      '/assets/precut/video2.mp4',
    ],
  },

  placeholders: {
    product: '/assets/placeholders/product.jpg',
    hero: '/assets/placeholders/hero.jpg',
    logo: '/assets/placeholders/logo.png',
  },
};

// Product Data
export const products = {
  ppfVariants: [
    {
      id: 'ultra-clear',
      name: 'Ultra Clear PPF',
      description: 'Crystal clear protection that preserves your car\'s original color with invisible defense against scratches, chips, and environmental damage.',
      features: ['Self-healing technology', 'UV protection', 'Hydrophobic coating', 'Anti-yellowing'],
      specs: {
        exterior: '195 Micron',
        interior: '140 Micron',
      },
      warranty: '7 Years',
      images: assets.ppf.ultraClear,
    },
    {
      id: 'gloss-black',
      name: 'Gloss Black PPF',
      description: 'Deep, lustrous black finish that adds a premium aesthetic while providing superior protection.',
      features: ['High gloss finish', 'Self-healing', 'UV protection', 'Scratch resistant'],
      specs: {
        exterior: '195 Micron',
        interior: '140 Micron',
      },
      warranty: '7 Years',
      images: assets.ppf.glossBlack,
    },
    {
      id: 'matte',
      name: 'Matte PPF',
      description: 'Transform your vehicle with a sophisticated matte finish that combines style with protection.',
      features: ['Satin matte finish', 'Self-healing', 'Anti-fingerprint', 'UV protection'],
      specs: {
        exterior: '195 Micron',
        interior: '140 Micron',
      },
      warranty: '7 Years',
      images: assets.ppf.matte,
    },
    {
      id: 'satin-matte',
      name: 'Satin Matte PPF',
      description: 'The perfect balance between gloss and matte, offering a unique satin finish with full protection.',
      features: ['Satin finish', 'Self-healing', 'Hydrophobic', 'UV protection'],
      specs: {
        exterior: '195 Micron',
        interior: '140 Micron',
      },
      warranty: '7 Years',
      images: assets.ppf.satinMatte,
    },
    {
      id: 'colour-series',
      name: 'Colour Series PPF',
      description: 'Express your style with our vibrant colour series PPF, combining bold aesthetics with premium protection.',
      features: ['Multiple color options', 'Self-healing', 'UV protection', 'Removable'],
      specs: {
        exterior: '195 Micron',
        interior: '140 Micron',
      },
      warranty: '7 Years',
      images: [...assets.ppf.colourSeries.lexus, ...assets.ppf.colourSeries.seltos],
    },
  ],

  windowFilms: {
    id: 'window-films',
    name: 'Sigma Nano Ceramic Window Films',
    description: 'Advanced nano ceramic technology for superior heat rejection, UV protection, and crystal clear visibility.',
    features: ['Heat rejection up to 70%', 'UV blocking 99%', 'Glare reduction', 'Signal friendly'],
    images: assets.windowFilms,
  },

  precutEdition: {
    id: 'precut-edition',
    name: 'Precut Edition',
    description: 'Precision-cut PPF kits for easy DIY installation on interior and exterior surfaces.',
    categories: ['Interior', 'Exterior', 'Window Films'],
    videos: assets.precut.videos,
  },
};

// PPF Layer Structure (5 Layers)
export const ppfLayers = [
  { name: 'Top Coat', description: 'Self-healing, hydrophobic layer', color: '#D32F2F' },
  { name: 'Clear Coat', description: 'UV protection & gloss enhancement', color: '#EF5350' },
  { name: 'TPU Film', description: 'Impact & scratch resistance', color: '#F44336' },
  { name: 'Adhesive', description: 'Pressure-sensitive bonding', color: '#E57373' },
  { name: 'Liner', description: 'Protective release liner', color: '#FFCDD2' },
];

// PPF Categories for E-Warranty form
export const ppfCategories = [
  'Ultra Clear PPF',
  'Gloss Black PPF',
  'Matte PPF',
  'Satin Matte PPF',
  'Colour Series PPF',
  'Sigma Nano Ceramic Window Film',
  'Precut Edition - Interior',
  'Precut Edition - Exterior',
  'Precut Edition - Window Films',
];

// Features for home page
export const features = [
  {
    id: 'self-healing',
    title: 'Self-Healing',
    description: 'Minor scratches disappear with heat exposure, keeping your film looking new.',
    icon: 'Sparkles',
  },
  {
    id: 'hydrophobic',
    title: 'Hydrophobic',
    description: 'Water beads off effortlessly, making cleaning easier and protecting against water spots.',
    icon: 'Droplets',
  },
  {
    id: 'uv-protection',
    title: 'UV Protection',
    description: 'Blocks harmful UV rays to prevent paint fading and interior damage.',
    icon: 'Sun',
  },
  {
    id: 'impact-resistance',
    title: 'Impact Resistance',
    description: 'Absorbs impacts from road debris, preventing chips and scratches.',
    icon: 'Shield',
  },
];

// Contact Info
export const contactInfo = {
  email: 'sigmappf@gmail.com',
  phone: '', // To be provided
  address: 'Hyderabad, India',
  instagram: '@sigmappf',
  instagramUrl: 'https://instagram.com/sigmappf',
};
