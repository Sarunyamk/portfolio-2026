import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThreeBackground } from '@/components/three-background';
import { fontVariables } from '@/lib/fonts';
import { personJsonLd } from '@/lib/seo/jsonld';
import { metadata } from '@/lib/seo/metadata';
import './globals.css';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontVariables} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body>
        <div className="relative min-h-screen three-bg">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThreeBackground />
            {children}
            <SpeedInsights />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
