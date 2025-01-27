"use client";
import { useNavbarContext } from '@/state/navbar';

export default function Burger() {
  const isExpanded = true;
  const { open, toggleOpen } = useNavbarContext();

  return (
    <div
      aria-label="toggle menu"
      aria-expanded={isExpanded}
      onClick={() => toggleOpen(!open)}
      className="flex h-full w-[80px] cursor-pointer flex-col justify-center pl-8 outline-transparent [&>*]:my-1 [&>*]:h-[4px] [&>*]:w-[35px] [&>*]:origin-[1px] [&>*]:rounded-lg [&>*]:bg-white [&>*]:transition-transform [&>*]:duration-300"
    >
      <span style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }} />
      <span style={{ transform: open ? 'translateX(20px)' : 'translateX(0)', opacity: open ? 0 : 1 }} />
      <span style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0)' }} />
    </div>
  );
}
