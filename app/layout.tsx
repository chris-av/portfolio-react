import { ReactNode } from 'react';
import '@/styles/globals.css';
import { Nunito } from 'next/font/google';
// import NavBar from '@/components/Navigation';
// import MobileNavBar from '@/components/NavigationMobile';
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
        {children}
        <Footer />
      </body>
    </html>
  )
}
