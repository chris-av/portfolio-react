"use client";
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export default function ClientWrapper({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  )
}
