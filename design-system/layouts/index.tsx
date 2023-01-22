import { ReactNode, RefObject } from 'react';


interface ComponentProps {
  myref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
}

export default function Layout({ myref, children } : ComponentProps) {
  return (
    <div className="p-32 h-[90vh] text-lg sm:p-8 sm:text-base">
      { children }
    </div>
  );
}
