import {
  Announcement,
  Category,
  FooterLinkGroup,
  HeroSlide,
  Product,
  PromoItem,
  StoryCard
} from '../types';

export const announcements: Announcement[] = [
  { id: 'a1', text: 'Gratis verzending vanaf €100' },
  { id: 'a2', text: 'Gratis retourneren binnen 30 dagen' },
  { id: 'a3', text: 'Limited drop: nieuwe atelier collectie nu live' }
];

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Dames',
    slug: 'dames',
    description: 'Zachte tailoring, elevated essentials en statement outerwear.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    featuredLinks: ['Jurken', 'Blazers', 'Knitwear', 'Jassen']
  },
  {
    id: 'c2',
    name: 'Heren',
    slug: 'heren',
    description: 'Minimalistische silhouettes met premium stoffen en verfijnde details.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    featuredLinks: ['Overshirts', 'Denim', 'Broeken', 'Outerwear']
  },
  {
    id: 'c3',
    name: 'Girls',
    slug: 'girls',
    description: 'Speelse looks met zachte tinten, comfortabele fits en moderne lagen.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    featuredLinks: ['Sets', 'Jurkjes', 'Tops', 'Jassen']
  },
  {
    id: 'c4',
    name: 'Boys',
    slug: 'boys',
    description: 'Dagelijkse essentials en easy layers voor elke gelegenheid.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    featuredLinks: ['Hoodies', 'Denim', 'Basics', 'Sneakers']
  }
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'h1',
    eyebrow: 'Spring / Summer Atelier',
    title: 'Refined silhouettes for every day luxury.',
    subtitle:
      'Ontdek luchtige tailoring, zachte neutrals en statement layers voor een moderne garderobe.',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80',
    ctas: [
      { id: 'cta1', label: 'Shop dames', href: '#products', variant: 'primary' },
      { id: 'cta2', label: 'Shop heren', href: '#categories', variant: 'secondary' }
    ]
  },
  {
    id: 'h2',
    eyebrow: 'New Season Edit',
    title: 'Quiet confidence, tailored in soft tones.',
    subtitle:
      'Een premium edit van knitwear, denim en elevated essentials met editorial uitstraling.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    ctas: [
      { id: 'cta3', label: 'Bekijk nieuw', href: '#promo', variant: 'primary' },
      { id: 'cta4', label: 'Ontdek looks', href: '#stories', variant: 'secondary' }
    ]
  }
];

export const promoItems: PromoItem[] = [
  {
    id: 'p1',
    title: 'Nieuwe collectie',
    subtitle: 'Luxe basics, fresh denim en moderne fits.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    tag: 'New In',
    href: '#products'
  },
  {
    id: 'p2',
    title: 'Jeans deals',
    subtitle: 'Selected denim pieces met tijdelijke prijsdrop.',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80',
    tag: 'Limited',
    href: '#products'
  },
  {
    id: 'p3',
    title: 'Special offers',
    subtitle: 'Carefully curated sets met premium finishing.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Exclusive',
    href: '#products'
  },
  {
    id: 'p4',
    title: 'Co-ord sets',
    subtitle: 'Matching layers voor een moeiteloos polished look.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Trend Edit',
    href: '#stories'
  }
];

export const products: Product[] = [
  {
    id: 'pr1',
    name: 'Sculpted Blazer',
    category: 'Dames',
    subcategory: 'Blazers',
    price: 129.95,
    originalPrice: 159.95,
    image:
      'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    badge: 'Best Seller',
    colors: ['Sand', 'Black', 'Ivory']
  },
  {
    id: 'pr2',
    name: 'Relaxed Wool Coat',
    category: 'Dames',
    subcategory: 'Jassen',
    price: 189.95,
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80',
    badge: 'New',
    colors: ['Camel', 'Stone']
  },
  {
    id: 'pr3',
    name: 'Tailored Pleat Trouser',
    category: 'Heren',
    subcategory: 'Broeken',
    price: 94.95,
    image:
      'https://images.unsplash.com/photo-1506629905607-d9c297d0f1f1?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
    colors: ['Charcoal', 'Navy']
  },
  {
    id: 'pr4',
    name: 'Soft Knit Polo',
    category: 'Heren',
    subcategory: 'Knitwear',
    price: 69.95,
    originalPrice: 89.95,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    badge: 'Sale',
    colors: ['Cream', 'Taupe', 'Olive']
  },
  {
    id: 'pr5',
    name: 'Everyday Denim Jacket',
    category: 'Kids',
    subcategory: 'Outerwear',
    price: 49.95,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
    badge: 'Popular',
    colors: ['Blue']
  },
  {
    id: 'pr6',
    name: 'Cotton Lounge Set',
    category: 'Dames',
    subcategory: 'Sets',
    price: 79.95,
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1495121605193-b116b5b09a14?auto=format&fit=crop&w=1000&q=80',
    colors: ['Oat', 'Gray']
  },
  {
    id: 'pr7',
    name: 'Minimal Crewneck Tee',
    category: 'Heren',
    subcategory: 'Basics',
    price: 39.95,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=80',
    badge: 'Essential',
    colors: ['White', 'Black', 'Stone']
  },
  {
    id: 'pr8',
    name: 'Structured Midi Dress',
    category: 'Dames',
    subcategory: 'Jurken',
    price: 119.95,
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
    hoverImage:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    colors: ['Black', 'Ivory']
  }
];

export const storyCards: StoryCard[] = [
  {
    id: 's1',
    title: 'Shop the look',
    text: 'Een verfijnde layering edit voor city dressing met moderne neutrals.',
    image:
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80',
    href: '#products'
  },
  {
    id: 's2',
    title: 'Casual chic',
    text: 'Relaxed tailoring en zachte knitwear voor dagelijkse elegantie.',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80',
    href: '#promo'
  },
  {
    id: 's3',
    title: 'Capsule wardrobe',
    text: 'Bouw een tijdloze basisgarderobe met veelzijdige premium essentials.',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    href: '#categories'
  },
  {
    id: 's4',
    title: 'Denim guide',
    text: 'Van relaxed straight tot cropped shapes: ontdek je perfecte fit.',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80',
    href: '#products'
  }
];

export const footerLinks: FooterLinkGroup[] = [
  {
    id: 'f1',
    title: 'Shop',
    links: [
      { id: 'l1', label: 'Nieuw', href: '#' },
      { id: 'l2', label: 'Dames', href: '#' },
      { id: 'l3', label: 'Heren', href: '#' },
      { id: 'l4', label: 'Kids', href: '#' },
      { id: 'l5', label: 'Sale', href: '#' }
    ]
  },
  {
    id: 'f2',
    title: 'Klantenservice',
    links: [
      { id: 'l6', label: 'Contact', href: '#' },
      { id: 'l7', label: 'Verzending', href: '#' },
      { id: 'l8', label: 'Retourneren', href: '#' },
      { id: 'l9', label: 'FAQ', href: '#' }
    ]
  },
  {
    id: 'f3',
    title: 'Over ons',
    links: [
      { id: 'l10', label: 'Onze wereld', href: '#' },
      { id: 'l11', label: 'Duurzaamheid', href: '#' },
      { id: 'l12', label: 'Careers', href: '#' },
      { id: 'l13', label: 'Pers', href: '#' }
    ]
  },
  {
    id: 'f4',
    title: 'Socials',
    links: [
      { id: 'l14', label: 'Instagram', href: '#' },
      { id: 'l15', label: 'Pinterest', href: '#' },
      { id: 'l16', label: 'TikTok', href: '#' },
      { id: 'l17', label: 'YouTube', href: '#' }
    ]
  }
];
