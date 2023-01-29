import React from 'react';
import { useAppContext } from '@/state/state'

export default function Burger() {
  const isExpanded = true;
  const { open, toggleOpen } = useAppContext();

  return (
    <div
      aria-label="toggle menu"
      aria-expanded={isExpanded}
      onClick={() => toggleOpen(!open)}
      className="h-full outline-transparent w-[80px] cursor-pointer flex flex-col justify-center pl-8 [&>*]:bg-white [&>*]:h-[4px] [&>*]:w-[35px] [&>*]:my-1 [&>*]:rounded-lg [&>*]:transition-transform [&>*]:duration-300 [&>*]:origin-[3px]"
    >
      <span style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }} />
      <span style={{ transform: open ? 'translateX(20px)' : 'translateX(0)', opacity: open ? 0 : 1 }} />
      <span style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0)' }} />
    </div>
  );
}


