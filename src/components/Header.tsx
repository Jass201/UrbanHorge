import { Menu, Heart, Search, ShoppingBag, User2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Category } from '../types';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

interface Props {
  categories: Category[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  wishlistCount: number;
  cartCount: number;
}

export default function Header({
  categories,
  searchTerm,
  setSearchTerm,
  wishlistCount,
  cartCount
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategoryName, setActiveCategoryName] = useState<string | null>(null);

  const activeCategory = useMemo(
    () => categories.find((item) => item.name === activeCategoryName),
    [activeCategoryName, categories]
  );

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <div className="relative" onMouseLeave={() => setActiveCategoryName(null)}>
        <div className="container-shell flex items-center justify-between gap-3 py-4 lg:py-5">
          <div className="flex min-w-0 items-center gap-3 lg:gap-8">
            <button
              className="rounded-full border border-line p-2.5 lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <a href="#" className="min-w-0 shrink-0">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold uppercase tracking-[0.28em] text-stoneInk sm:text-base">
                  Urban Horge
                </p>
                <p className="hidden text-[11px] uppercase tracking-[0.22em] text-warmGray sm:block">
                  Premium Fashion
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {['Dames', 'Heren', 'Kids'].map((item) => (
                <button
                  key={item}
                  onMouseEnter={() => setActiveCategoryName(item)}
                  className="text-sm font-medium text-stoneInk/90 transition hover:text-stoneInk"
                >
                  {item}
                </button>
              ))}
              <a href="#promo" className="text-sm font-medium text-stoneInk/90 transition hover:text-stoneInk">
                Nieuw
              </a>
              <a href="#products" className="text-sm font-medium text-stoneInk/90 transition hover:text-stoneInk">
                Sale
              </a>
            </nav>
          </div>

          <div className="hidden flex-1 justify-center lg:flex">
            <label className="flex w-full max-w-md items-center gap-3 rounded-full border border-line bg-sand/60 px-4 py-3">
              <Search className="h-4 w-4 text-warmGray" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Zoek op product of categorie"
                className="w-full bg-transparent text-sm outline-none placeholder:text-warmGray"
              />
            </label>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <button className="rounded-full border border-line p-2.5 lg:hidden" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <button className="hidden rounded-full border border-line p-2.5 sm:inline-flex" aria-label="Account">
              <User2 className="h-4 w-4" />
            </button>
            <button className="relative rounded-full border border-line p-2.5" aria-label="Wishlist">
              <Heart className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 rounded-full bg-stoneInk px-1.5 py-0.5 text-[10px] text-white">
                {wishlistCount}
              </span>
            </button>
            <button className="relative rounded-full border border-line p-2.5" aria-label="Cart">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 rounded-full bg-stoneInk px-1.5 py-0.5 text-[10px] text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        <MegaMenu open={Boolean(activeCategory)} category={activeCategory} />
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </header>
  );
}
