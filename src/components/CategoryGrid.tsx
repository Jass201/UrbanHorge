import { motion } from 'framer-motion';
import { Category } from '../types';
import CTAButton from './CTAButton';

interface Props {
  items: Category[];
}

export default function CategoryGrid({ items }: Props) {
  return (
    <section id="categories" className="container-shell py-16 sm:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-warmGray">Collections</p>
          <h2 className="section-title">Ontdek jouw volgende signature look</h2>
        </div>
        <p className="hidden max-w-lg text-sm text-warmGray md:block">
          Verken zorgvuldig gecureerde collecties voor dames, heren en kids met een editorial,
          high-end uitstraling.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            id={item.slug}
            className="group overflow-hidden rounded-[28px] bg-sand scroll-mt-28"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.name}</h3>
              </div>
            </div>

            <div className="space-y-4 p-5">
              <p className="text-sm leading-6 text-warmGray">{item.description}</p>
              <CTAButton href={`#${item.slug}`} variant="ghost" className="w-full justify-center">
                Bekijk collectie
              </CTAButton>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
