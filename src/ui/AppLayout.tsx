import { ReactNode } from "react";
import MainHeader from "./header/MainHeader";
import MainMenu from "./menu/MainMenu";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

type Props = {
  children?: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const { menuValue, hideMenuValue } = useSelector(
    (state: RootState) => state.menu,
  );

  return (
    <div className='flex flex-row h-screen max-w-[1400px]'>
      <div
        className={`${menuValue ? "w-[20%]" : "w-[8.3%]"} ${
          hideMenuValue ? "!w-[0%]" : "w-1/5"
        } relative transition-all duration-300 ease-in-out h-ful bg-secondary-100 shadow-2xl z-10`}>
        <MainMenu />
      </div>
      <div
        className={`flex flex-col transition-all duration-300 ease-in-out ${
          menuValue
            ? "w-[80%]"
            : hideMenuValue == false
            ? "w-[91.7%]"
            : "w-[100%]"
        } `}>
        <div className={`h-[12%] w-full bg-secondary-100`}>
          <MainHeader />
        </div>
        <div className='h-[88%] w-full bg-secondary-200'>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
