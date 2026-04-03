import { motion, AnimatePresence } from 'framer-motion';
import { Category } from '../types';

interface Props {
  open: boolean;
  category?: Category;
}

export default function MegaMenu({ open, category }: Props) {
  return (
    <AnimatePresence>
      {open && category && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.22 }}
          className="absolute left-0 right-0 top-full z-40 border-t border-line bg-white shadow-soft"
        >
          <div className="container-shell grid gap-8 py-8 md:grid-cols-[1.1fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.28em] text-warmGray">Uitgelicht</p>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{category.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-warmGray">{category.description}</p>
              </div>
              <div className="grid gap-3">
                {category.featuredLinks.map((link) => (
                  <a
                    href="#"
                    key={link}
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm transition hover:border-stoneInk"
                  >
                    <span>{link}</span>
                    <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <img
                src={category.image}
                alt={category.name}
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
