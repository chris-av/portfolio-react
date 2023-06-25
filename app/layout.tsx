import { ReactNode } from 'react';
import './globals.css'
import { Nunito } from 'next/font/google';
import NavBar from '@/components/Navigation';
import MobileNavBar from '@/components/NavigationMobile';


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
        <NavBar />
        <MobileNavBar />
        {children}
      </body>
    </html>
  )
}