import { Geist, Geist_Mono, Prompt } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// ─── Mono (code blocks) ───
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const prompt = Prompt({
  variable: '--font-prompt',
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
});

export const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  prompt.variable,
].join(' ');
