import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from '@/redux/Provider';
import './globals.scss';

const inter = Inter({ subsets: ['latin'], weight: ['300', '500'] });

export const metadata: Metadata = {
  title: 'Cloud Storage',
  description: 'Cloud storage create by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
