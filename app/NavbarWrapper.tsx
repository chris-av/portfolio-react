"use client";
import Navigation from "@/components/Navigation";
import NavigationMobile from "@/components/NavigationMobile";
import NavbarProvider from '@/state/navbar';

export default function NavbarWrapper() {
  return (
    <NavbarProvider>
      <NavigationMobile/>
      <Navigation />
    </NavbarProvider>
  )
}
