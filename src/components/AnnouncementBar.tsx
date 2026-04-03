import { Announcement } from '../types';
import { Sparkles } from 'lucide-react';

interface Props {
  items: Announcement[];
}

export default function AnnouncementBar({ items }: Props) {
  return (
    <div className="border-b border-black/5 bg-stoneInk text-white">
      <div className="container-shell flex flex-col gap-2 py-2 text-[11px] uppercase tracking-[0.28em] sm:flex-row sm:items-center sm:justify-between sm:text-xs">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2 whitespace-nowrap text-white/85">
            <Sparkles className="h-3.5 w-3.5 text-champagne" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
