import { ReactNode } from "react";
import MainHeader from "./header/MainHeader";
import MainMenu from "./menu/MainMenu";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ChangeMenuHeaderUi from "./ChangeMenuHeaderUi";

type Props = {
  children?: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const { menuValue, hideMenuValue, hideHeader } = useSelector(
    (state: RootState) => state.menuHeader,
  );

  return (
    <div className='flex flex-row h-screen max-w-[1400px]'>
        <MainMenu />
      <div
        className={`flex flex-col transition-all duration-300 ease-in-out ${
          menuValue
            ? "w-[80%]"
            : hideMenuValue == false
            ? "w-[91.7%]"
            : "w-[100%]"
        } `}>
          <MainHeader />
        <div
          className={`w-full bg-secondary-200 transition-all duration-300 ease-in-out ${
            hideHeader ? "h-[100%]" : "h-[88%]"
          }`}>
          {children}
        </div>
      </div>
      <ChangeMenuHeaderUi />
    </div>
  );
};

export default AppLayout;
