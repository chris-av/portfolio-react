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
        "my-12 flex min-h-[450px] w-full flex-col items-center justify-between p-12 lg:flex-row",
        "[&>*]:w-full lg:[&>*]:w-1/2"
      )}
    >
      {children}
    </div>
  );
}
