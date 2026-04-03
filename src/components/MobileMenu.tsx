import { AnimatePresence, motion } from 'framer-motion';
import { Category } from '../types';
import { Search, X } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  categories: Category[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const primaryLinks = [
  { label: 'Nieuw', href: '#promo' },
  { label: 'Dames', href: '#categories' },
  { label: 'Heren', href: '#categories' },
  { label: 'Kids', href: '#categories' },
  { label: 'Sale', href: '#products' }
];

export default function MobileMenu({
  open,
  onClose,
  categories,
  searchTerm,
  setSearchTerm
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close menu overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/45"
          />

          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-y-0 left-0 z-50 flex h-full w-[88%] max-w-sm flex-col overflow-hidden bg-white shadow-soft"
          >
            <div className="border-b border-line bg-stoneInk px-5 py-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold uppercase tracking-[0.24em]">Urban Horge</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/65">Shop navigation</p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full border border-white/20 bg-white/10 p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <label className="mt-5 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3">
                <Search className="h-4 w-4 text-white/70" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Zoek producten"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/55"
                />
              </label>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <nav className="grid gap-3">
                {primaryLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-2xl border border-line bg-sand/40 px-4 py-4 text-base font-medium text-stoneInk transition hover:border-stoneInk hover:bg-sand"
                  >
                    <span>{item.label}</span>
                    <span className="text-stoneInk/55">→</span>
                  </a>
                ))}
              </nav>

              <div className="mt-7">
                <p className="mb-3 text-xs uppercase tracking-[0.26em] text-warmGray">Collecties</p>
                <div className="grid gap-3">
                  {categories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.slug}`}
                      onClick={onClose}
                      className="rounded-2xl border border-line p-4 transition hover:border-stoneInk"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium text-stoneInk">{category.name}</p>
                        <span className="text-sm text-warmGray">Bekijk</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-warmGray">{category.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
