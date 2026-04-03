import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="container-shell pb-16 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[32px] border border-line bg-grain"
      >
        <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.32em] text-warmGray">Newsletter</p>
            <h2 className="section-title">Ontvang 10% korting op je eerste bestelling</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-warmGray">
              Schrijf je in voor style updates, early access tot nieuwe drops en exclusieve acties.
            </p>
          </div>

          <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <label className="flex flex-1 items-center gap-3 rounded-full border border-line bg-white px-4 py-3 shadow-sm">
              <Mail className="h-4 w-4 text-warmGray" />
              <input
                type="email"
                placeholder="Vul je e-mailadres in"
                className="w-full bg-transparent text-sm outline-none placeholder:text-warmGray"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-stoneInk px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2e2722]"
            >
              Inschrijven
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
