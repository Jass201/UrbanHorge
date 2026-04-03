import { motion } from 'framer-motion';
import { PromoItem } from '../types';

interface Props {
  items: PromoItem[];
}

export default function PromoSection({ items }: Props) {
  return (
    <section id="promo" className="container-shell pb-16 sm:pb-20">
      <div className="mb-8">
        <p className="mb-2 text-xs uppercase tracking-[0.32em] text-warmGray">Campaigns</p>
        <h2 className="section-title">Nieuwe energie voor je garderobe</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group relative overflow-hidden rounded-[28px] bg-stoneInk text-white"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-[420px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/90">
                {item.tag}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/78">{item.subtitle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
