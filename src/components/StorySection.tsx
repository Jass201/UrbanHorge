import { motion } from 'framer-motion';
import { StoryCard } from '../types';

interface Props {
  items: StoryCard[];
}

export default function StorySection({ items }: Props) {
  return (
    <section id="stories" className="container-shell pb-16 sm:pb-20">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-warmGray">Editorial</p>
          <h2 className="section-title">Inspiration for a curated wardrobe</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-warmGray">
          Een magazine-achtige sectie met stories, looks en stylinggidsen die de luxe webshopbeleving
          versterken.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.a
            href={item.href}
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="group overflow-hidden rounded-[28px] border border-line bg-white"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-warmGray">{item.text}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-stoneInk">
                Lees meer →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
