import { Heart, Plus } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';

interface Props {
  product: Product;
  onWishlist: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export default function ProductCard({ product, onWishlist, onAddToCart }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-[24px] bg-sand">
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-stoneInk shadow-sm">
            {product.badge}
          </span>
        )}

        <button
          onClick={() => onWishlist(product.id)}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/60 bg-white/80 p-2 text-stoneInk opacity-100 transition hover:scale-105 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart className="h-4 w-4" />
        </button>

        <img
          src={hovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          loading="lazy"
          className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
          <button
            onClick={() => onAddToCart(product.id)}
            className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-stoneInk opacity-100 shadow-soft transition hover:-translate-y-0.5 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            <Plus className="h-4 w-4" />
            Quick add
          </button>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-warmGray">{product.subcategory}</p>
            <h3 className="mt-1 text-base font-medium">{product.name}</h3>
          </div>
          <div className="text-right">
            <p className="font-medium text-stoneInk">{formatPrice(product.price)}</p>
            {product.originalPrice && (
              <p className="text-sm text-warmGray line-through">{formatPrice(product.originalPrice)}</p>
            )}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <span key={color} className="rounded-full border border-line px-2.5 py-1 text-xs text-warmGray">
              {color}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
