import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientI18nProvider from '../i18n/ClientI18nProvider';
import '../index.css';





const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juan José Burbano - Portfolio',
  description: 'Software Engineering student focused on developing high-level backend solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientI18nProvider>
          {children}
        </ClientI18nProvider>
      </body>
    </html>
  );
}