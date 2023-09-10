import { ReactNode, RefObject } from 'react';


interface ComponentProps {
  myref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
}

export default function Layout({ myref, children } : ComponentProps) {
  return (
    <div className="h-[90vh] p-32 text-lg sm:p-8 sm:text-base">
      { children }
    </div>
  );
}
