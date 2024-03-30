import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TopHeader from "./TopHeader";

const MainHeader = () => {
  const { hideHeader, changeMenuHeaderUi, showAnimate } = useSelector(
    (state: RootState) => state.menuHeader,
  );

  return (
    <>
      <div
        className={`w-full bg-secondary-100 transition-all relative duration-300 ease-in-out ${
          hideHeader ? "h-0" : "h-[12%]"
        }`}>
        <div
          className={`${
            showAnimate == true ? "w-0 h-0 overflow-hidden" : "w-full h-full"
          } bg-secondary-100 absolute
          ${showAnimate && changeMenuHeaderUi && "topHeaderAnimation"}
          ${
            showAnimate && changeMenuHeaderUi == false && "showTopHeaderAnimation"
          }
          `}>
          <TopHeader
          />
        </div>
        {/*  */}
        <div
          className={`w-0 h-0 overflow-hidden bg-secondary-100 absolute
          ${showAnimate == false && changeMenuHeaderUi && "w-full h-full"}
          ${showAnimate && changeMenuHeaderUi && "showTopHeaderAnimation"}
          ${
            showAnimate &&
            changeMenuHeaderUi == false &&
            "topHeaderAnimation"
          }
          `}>
          <TopHeader
          />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default MainHeader;


