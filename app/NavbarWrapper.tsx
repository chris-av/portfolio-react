"use client";
import Navigation from "@/components/Navigation";
import NavigationMobile from "@/components/NavigationMobile";
import NavbarProvider from '@/state/navbar';
import ThemeProvider from '@/state/theme';

export default function NavbarWrapper() {
  return (
    <ThemeProvider>
      <NavbarProvider>
        <NavigationMobile/>
        <Navigation />
      </NavbarProvider>
    </ThemeProvider>
  )
}
