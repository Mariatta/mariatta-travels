// Fallback CAD value of one unit of each trip base currency. The budget page
// lets the user override the live rate per trip (stored in localStorage under
// travels-rate-<trip-id>); these defaults seed that input.
export const currencyRates: Record<string, number> = {
  EUR: 1.53, USD: 1.37, TWD: 0.045, CAD: 1,
};

export const defaultRateFor = (currency: string): number => currencyRates[currency] ?? 1;

export const currencySymbol = (c: string): string =>
  c === 'EUR' ? '€' : c === 'USD' ? '$' : c === 'TWD' ? 'NT$' : c === 'CAD' ? '$' : c + ' ';