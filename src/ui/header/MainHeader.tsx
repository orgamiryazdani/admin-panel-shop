import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TopHeader from "./TopHeader";

const MainHeader = () => {
  const { hideHeader } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  return (
    <>
      <div
        className={`w-full bg-secondary-100 topHeaderAnimation transition-all duration-300 ease-in-out ${
          hideHeader ? "h-0" : "h-[12%]"
        }`}>
        <TopHeader />
      </div>
      <div
        className={`showTopHeaderAnimation bg-secondary-100 absolute w-0 overflow-hidden topHeaderAnimation transition-all duration-300 ease-in-out ${
          hideHeader ? "h-0" : "h-[12%]"
        }`}>
        <TopHeader />
      </div>
    </>
  );
};

export default MainHeader;
