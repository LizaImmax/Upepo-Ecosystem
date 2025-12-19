import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundMotion from '@/components/BackgroundMotion';

export const metadata: Metadata = {
  title: 'Upepo Ecosystem - Where Learning, Voices, and Growth Flow Together',
  description: 'A living space for learners, thinkers, builders, and storytellers to grow with clarity, soul, and community.',
  keywords: ['learning', 'community', 'growth', 'ecosystem', 'education'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundMotion />
        <Header />
        <main className="relative z-10 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
