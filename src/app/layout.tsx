import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Velvet & Bloom — Salon fryzjerski dla kobiet',
  description:
    'Velvet & Bloom — kameralny salon fryzjerski dla kobiet. Strzyżenie, koloryzacja, stylizacja i pielęgnacja włosów.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
