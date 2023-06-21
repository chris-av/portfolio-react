import { ReactNode, ComponentProps } from 'react';
import Link from 'next/link';
import classnames from 'classnames';


interface Props {
  type?: "a" | "next-link" | "button";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "blue" | "green" | "purple";
  children: ReactNode;
  extraClasses?: string;
}

type ButtonProps = ComponentProps<"button"> & { type: "a" | "next-link" };
type AnchorProps = ComponentProps<"a">;
type CombinedProps = ButtonProps | AnchorProps & Props;


export default function Button({
  type = "button",
  size = "md",
  color = "blue",
  children,
  href = "/",
  extraClasses = "",
}: CombinedProps) {

  const baseStyle = classnames("w-fit cursor-pointer rounded-lg px-4 py-2 font-bold", {
    // colors
    "bg-purple text-white": color === "purple",
    "bg-[blue] text-white": color === "blue",
    "bg-green text-white": color === "green",

    // sizing
    "my-2 px-4 py-2 text-sm": size === "sm",
    "my-4 px-8  py-4 text-base": size === "md",
    "my-4 px-8 py-4 text-lg": size === "lg",
    "my-8 px-8 py-4 text-xl": size === "xl",
  });

  if (type === "a") {
    return (
      <a href={href} className={classnames(baseStyle, extraClasses)}>
        {children}
      </a>
    );
  }

  if (type === "next-link") {
    return (
      <Link href={href} className={classnames(baseStyle, extraClasses)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classnames(baseStyle, extraClasses)}>
      {children}
    </button>
  );
}
