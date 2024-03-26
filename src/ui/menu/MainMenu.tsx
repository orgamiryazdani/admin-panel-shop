import { useSelector } from "react-redux";
import { RootState } from "../../store";
import RightMenu from "./RightMenu";

const MainMenu = () => {
  const { menuValue, hideMenuValue } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  return (
    <>
      <div
        className={`${menuValue ? "w-[20%]" : "w-[8.3%]"} ${
          hideMenuValue ? "!w-[0%]" : "w-1/5"
        } relative transition-all duration-300 ease-in-out h-ful bg-secondary-100 shadow-2xl z-10
         menuRightTopRightAnimation
         `}>
        <RightMenu />
      </div>
      <div
        className={`${menuValue ? "w-[20%]" : "w-[8.3%]"} ${
          hideMenuValue ? "!w-[0%]" : "w-1/5"
        } absolute w-0 h-0 overflow-hidden transition-all duration-300 ease-in-out h-ful bg-secondary-100 shadow-2xl z-10
        showRightMenuAnimate
         `}>
        <RightMenu />
      </div>
    </>
  );
};

export default MainMenu;
