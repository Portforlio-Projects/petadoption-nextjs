import { ClerkProvider } from '@clerk/nextjs';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pet adoption',
  description: 'Pet adoption app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
