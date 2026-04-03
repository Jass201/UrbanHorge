import { CreditCard, Facebook, Instagram, ShieldCheck } from 'lucide-react';
import { FooterLinkGroup } from '../types';

interface Props {
  groups: FooterLinkGroup[];
}

export default function Footer({ groups }: Props) {
  return (
    <footer className="border-t border-line bg-stoneInk text-white">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-4">
            <img
              src="/urban-horge-logo.png"
              alt="Urban Horge logo"
              className="h-14 w-14 rounded-full object-contain bg-white/5 p-1"
            />
            <div>
              <p className="text-sm font-semibold tracking-[0.32em] text-champagne">URBAN HORGE</p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/55">Premium Fashion</p>
            </div>
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Modern fashion with an urban luxury identity.</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Een premium digitale winkelervaring met editorial uitstraling, verfijnde details en een
            schaalbare React architectuur.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
              <CreditCard className="h-4 w-4" /> Visa / Mastercard / iDEAL
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
              <ShieldCheck className="h-4 w-4" /> Veilige checkout
            </span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.id}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-white/55">
                {group.title}
              </h4>
              <div className="grid gap-3">
                {group.links.map((link) => (
                  <a key={link.id} href={link.href} className="text-sm text-white/75 transition hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>

          <div className="flex items-center gap-3">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <span>© 2026 Urban Horge. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
