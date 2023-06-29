import { ReactNode } from 'react'



interface Props {
  children: ReactNode;
}

export default function LayoutTwoPanel({
  children,
}: Props) {
  return (
    <div
      className="my-12 flex min-h-[450px] w-full flex-col-reverse items-center justify-between p-12 sm:flex-row"
    >
      {children}
    </div>
  )
}

