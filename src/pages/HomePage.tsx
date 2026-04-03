import { useMemo, useState } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LoadingSkeleton from '../components/LoadingSkeleton';
import NewsletterSection from '../components/NewsletterSection';
import ProductGrid from '../components/ProductGrid';
import PromoSection from '../components/PromoSection';
import StorySection from '../components/StorySection';
import { useHomeData } from '../hooks/useHomeData';

export default function HomePage() {
  const { data, isLoading } = useHomeData();
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const wishlistCount = useMemo(() => wishlist.length, [wishlist]);
  const cartCount = useMemo(() => cart.length, [cart]);

  const handleWishlist = (id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleAddToCart = (id: string) => {
    setCart((prev) => [...prev, id]);
  };

  if (isLoading || !data) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar items={data.announcements} />
      <Header
        categories={data.categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        wishlistCount={wishlistCount}
        cartCount={cartCount}
      />

      <main>
        <HeroSection slides={data.heroSlides} />
        <CategoryGrid items={data.categories} />
        <PromoSection items={data.promoItems} />
        <ProductGrid
          items={data.products}
          searchTerm={searchTerm}
          onWishlist={handleWishlist}
          onAddToCart={handleAddToCart}
        />
        <StorySection items={data.storyCards} />
        <NewsletterSection />
      </main>

      <Footer groups={data.footerLinks} />
    </div>
  );
}
