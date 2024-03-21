import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return <div>
    {children}
  </div>;
};

export default AppLayout;
