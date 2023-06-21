import { ReactNode, ComponentProps } from 'react';
import Link from 'next/link';
import classnames from 'classnames';


interface Props {
  type?: "a" | "next-link" | "button";
  color?: "blue" | "green" | "purple";
  children: ReactNode;
  extraClasses?: string;
}

type ButtonProps = ComponentProps<"button"> & { type: "a" | "next-link" };
type AnchorProps = ComponentProps<"a">;
type CombinedProps = ButtonProps | AnchorProps & Props;


export default function Button({
  type = "button",
  color = "blue",
  children,
  href = "/",
  extraClasses = "",
}: CombinedProps) {

  const baseStyle = classnames("rounded-lg px-4 py-2 font-bold", {
    "bg-purple text-white": color === "purple",
    "bg-[blue] text-white": color === "blue",
    "bg-[yellow]": color === "green",
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
