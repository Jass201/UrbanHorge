import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HeroSlide } from '../types';
import CTAButton from './CTAButton';

interface Props {
  slides: HeroSlide[];
}

export default function HeroSection({ slides }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const active = slides[index];

  return (
    <section className="container-shell pt-4 lg:pt-6">
      <div className="relative overflow-hidden rounded-[34px] bg-stoneInk">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.image}
            alt={active.title}
            loading="eager"
            initial={{ scale: 1.05, opacity: 0.25 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0.15 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[72svh] min-h-[560px] w-full object-cover"
          />
        </AnimatePresence>

        <div className="image-overlay absolute inset-0" />

        <div className="absolute inset-0 flex items-end">
          <div className="container-shell pb-8 sm:pb-12 lg:pb-16">
            <motion.div
              key={active.id + '-content'}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="max-w-3xl text-white"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/75">{active.eyebrow}</p>
              <h1 className="editorial-title max-w-2xl text-white">{active.title}</h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/82 sm:text-base">
                {active.subtitle}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {active.ctas.map((cta) => (
                  <CTAButton key={cta.id} href={cta.href} variant={cta.variant ?? 'primary'}>
                    {cta.label}
                  </CTAButton>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 flex gap-2">
          {slides.map((slide, dotIndex) => (
            <button
              key={slide.id}
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition-all ${
                index === dotIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
