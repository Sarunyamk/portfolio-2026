import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThreeBackground } from '@/components/three-background';
import { personJsonLd } from '@/lib/seo/jsonld';
import { metadata } from '@/lib/seo/metadata';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

export { metadata };

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen three-bg">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThreeBackground />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
