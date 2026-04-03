export type Announcement = {
  id: string;
  text: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featuredLinks: string[];
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  ctas: Array<{
    id: string;
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }>;
};

export type PromoItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  category: 'Dames' | 'Heren' | 'Kids';
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  colors: string[];
};

export type StoryCard = {
  id: string;
  title: string;
  text: string;
  image: string;
  href: string;
};

export type FooterLinkGroup = {
  id: string;
  title: string;
  links: Array<{ id: string; label: string; href: string }>;
};

export type HomeData = {
  announcements: Announcement[];
  categories: Category[];
  heroSlides: HeroSlide[];
  promoItems: PromoItem[];
  products: Product[];
  storyCards: StoryCard[];
  footerLinks: FooterLinkGroup[];
};
