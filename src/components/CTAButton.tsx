import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function CTAButton({
  href = '#',
  children,
  variant = 'primary',
  className
}: CTAButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300';

  const variants = {
    primary: 'bg-stoneInk text-white hover:-translate-y-0.5 hover:bg-[#2e2722]',
    secondary:
      'border border-white/60 bg-white/10 text-white hover:bg-white hover:text-stoneInk',
    ghost: 'border border-line bg-white text-stoneInk hover:border-stoneInk hover:-translate-y-0.5'
  };

  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
