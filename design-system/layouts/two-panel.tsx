import { ReactNode } from 'react'
import classnames from 'classnames';

interface Props {
  children: ReactNode;
}

export function LayoutTwoPanel({
  children,
}: Props) {
  return (
    <div
      className={classnames(
        "mx-auto my-12 flex min-h-[450px] w-full max-w-[1250px] flex-col items-center justify-between px-12 lg:my-0 lg:flex-row",
        "[&>*]:w-full lg:[&>*]:w-1/2"
      )}
    >
      {children}
    </div>
  );
}
