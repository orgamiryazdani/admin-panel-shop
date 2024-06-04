import { useSelector } from "react-redux";
import { RootState } from "../../store";
import RightMenu from "./RightMenu";
import TopMenu from "./TopMenu";

const MainMenu = () => {
  const { menuValue, hideMenuValue, changeMenuHeaderUi, showAnimate } =
    useSelector((state: RootState) => state.menuHeader);

  return (
    <>
      <div
        className={`${menuValue ? "w-[20%]" : "w-[8.3%]"} ${
          hideMenuValue ? "!w-[0%]" : "w-1/5"
        } relative transition-all duration-300 ease-in-out h-ful bg-secondary-300 z-10 
         `}>
        <div
          className={`${
            showAnimate == true ? "w-0 h-0 overflow-hidden" : "w-full h-full"
          } bg-secondary-100 absolute shadow-2xl
          ${showAnimate && changeMenuHeaderUi && "menuRightTopRightAnimation"}
          ${
            showAnimate && changeMenuHeaderUi == false && "showRightMenuAnimate"
          }
          `}>
          <RightMenu
            showMenuBar={showAnimate && changeMenuHeaderUi ? true : false}
          />
        </div>
        {/*  */}
        <div
          className={`w-0 h-0 overflow-hidden shadow-2xl bg-secondary-100 absolute
          ${showAnimate == false && changeMenuHeaderUi && "w-full h-full overflow-visible"}
          ${showAnimate && changeMenuHeaderUi && "showRightMenuAnimate"}
          ${
            showAnimate &&
            changeMenuHeaderUi == false &&
            "menuTopRightAnimationTwo"
          }
          `}>
          <TopMenu
            showMenuBar={showAnimate && changeMenuHeaderUi ? false : true}
          />
        </div>
      </div>
    </>
  );
};

export default MainMenu;
