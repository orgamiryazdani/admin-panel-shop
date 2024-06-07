import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TopHeader from "./TopHeader";
import RightHeader from "./RightHeader";

const MainHeader = () => {
  const { hideHeader, changeMenuHeaderUi, showAnimate } = useSelector(
    (state: RootState) => state.menuHeader,
  );

  return (
    <>
      <div
        className={`w-full bg-secondary-300 !min-w-96 transition-all relative duration-300 ease-in-out ${
          hideHeader ? "h-0" : "min-h-[75px]"
        }`}>
        <div
          className={`${
            showAnimate == true ? "w-0 h-0 overflow-hidden" : "w-full h-full"
          } bg-secondary-100 absolute
          ${showAnimate && changeMenuHeaderUi && "topHeaderAnimation"}
          ${
            showAnimate &&
            changeMenuHeaderUi == false &&
            "showTopHeaderAnimation"
          }
          `}>
          <TopHeader />
        </div>
        {/*  */}
        <div
          className={`w-0 h-0 overflow-hidden bg-secondary-100 absolute
          ${
            showAnimate == false &&
            changeMenuHeaderUi &&
            "w-full h-full overflow-visible"
          }
          ${showAnimate && changeMenuHeaderUi && "showTopHeaderAnimation"}
          ${showAnimate && changeMenuHeaderUi == false && "topHeaderAnimation"}
          `}>
          <RightHeader />
        </div>
      </div>
    </>
  );
};

export default MainHeader;
