export function formatPrice(value: number) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
  }).format(value);
}

export function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}
