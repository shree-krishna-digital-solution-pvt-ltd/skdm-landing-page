import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shree Krishna Digital | Digital Marketing Agency in Mumbai',
  description:
    'Full-service SEO, Google Ads, Social Media, and Web Development built to scale your business. Turning clicks into real customers & revenue.',
  keywords: [
    'Shree Krishna Digital',
    'SKDM',
    'Digital Marketing Agency Mumbai',
    'SEO Agency Mumbai',
    'Google Ads Specialist',
    'Performance Marketing',
    'Web Development',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16896197421"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16896197421');
            `,
          }}
        />
      </head>
      <body className="font-sans bg-white text-slate-heading antialiased min-h-screen selection:bg-blue-100 selection:text-brand-700">
        {children}
      </body>
    </html>
  );
}
