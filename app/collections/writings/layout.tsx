import { ReactNode } from "react";
import BackToWritings from "./BackToWritings";

export default function WritingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-300 mx-auto px-6 py-12">
      <BackToWritings />
      {children}
    </div>
  );
}
