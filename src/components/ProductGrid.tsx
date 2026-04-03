import { motion } from 'framer-motion';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { useMemo, useState } from 'react';

interface Props {
  items: Product[];
  searchTerm: string;
  onWishlist: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const filters = ['Alle', 'Dames', 'Heren', 'Kids'];

export default function ProductGrid({ items, searchTerm, onWishlist, onAddToCart }: Props) {
  const [activeFilter, setActiveFilter] = useState('Alle');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesFilter = activeFilter === 'Alle' || item.category === activeFilter;
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.subcategory.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, items, searchTerm]);

  return (
    <section id="products" className="container-shell pb-16 sm:pb-20">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-warmGray">Recommended</p>
          <h2 className="section-title">Shop jouw favorieten</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-warmGray">
            Ontdek een selectie premium essentials, tailoring en elevated basics met dynamische
            filtering per categorie.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? 'bg-stoneInk text-white'
                  : 'border border-line bg-white text-stoneInk hover:border-stoneInk'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-line bg-sand/40 p-10 text-center">
          <p className="text-lg font-medium">Geen producten gevonden</p>
          <p className="mt-2 text-sm text-warmGray">Probeer een andere zoekterm of categorie.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredItems.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <ProductCard
                product={product}
                onWishlist={onWishlist}
                onAddToCart={onAddToCart}
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
