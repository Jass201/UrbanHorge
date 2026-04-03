import {
  announcements,
  categories,
  footerLinks,
  heroSlides,
  products,
  promoItems,
  storyCards
} from '../data/mockData';
import { HomeData } from '../types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getHomeData(): Promise<HomeData> {
  await delay(600);

  return {
    announcements,
    categories,
    heroSlides,
    promoItems,
    products,
    storyCards,
    footerLinks
  };
}
