import { ReactNode } from "react";
import MainHeader from "./header/MainHeader";
import MainMenu from "./menu/MainMenu";

type Props = {
  children?: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-12 grid-rows-9 w-screen h-screen max-w-[1400px]'>
      <div className='row-span-1 col-start-3 col-end-13 bg-white'>
        <MainHeader />
      </div>
      <div className='col-start-1 col-end-1 row-start-1 row-end-10 shadow-2xl bg-white'>
        <MainMenu />
      </div>
      <div className='col-start-3 col-end-13 row-start-2 row-end-10 '>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
