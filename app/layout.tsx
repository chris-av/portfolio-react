import { ReactNode } from 'react';
import { Nunito } from 'next/font/google';
import NavbarWrapper from './NavbarWrapper';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import "semantic-ui-css/components/icon.min.css";

const noto = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "700", "900"],
});

export const metadata = {
  metadataBase: new URL("https://chrisav.dev"),
  title: 'Christian Valenzuela',
  description: 'Full Stack Developer, Engineer, Analyst',
  openGraph: {
    title: "Christian Valenzuela | Full Stack, Data Engineer",
    description: [
      "Experienced Full Stack and Data Engineer specializing in crafting scalable web applications and building robust data workflows.",
      "Delivering tailored solutions for modern web development and data-driven insights.",
    ].join(" "),
    url: "https://yourwebsite.com", 
    type: "website",
    locale: "en_US",
    siteName: "Christian Valenzuela Portfolio", // Your website's name for better branding
    images: [
      {
        url: "/chrisav-og-preview.png",
        width: 1229,
        height: 630,
      },
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
      {
        url: "/mstile-150x150.png",
        width: 150,
        height: 150,
      },
    ],
  },
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
  );
}
