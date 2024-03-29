import { ReactNode } from 'react';
import '@/styles/globals.css';
import { Nunito } from 'next/font/google';
import NavBar from '@/components/Navigation';
import NavbarWrapper from './NavbarWrapper';
import Footer from '@/components/Footer';


const noto = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "700", "900"],
});

export const metadata = {
  title: 'Christian Valenzuela',
  description: 'Full Stack Developer, Engineer, Analyst',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <NavbarWrapper />
        <div className="pt-[80px] lg:pt-0">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
