import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  closeMenu,
  hideMenu,
  openMenu,
} from "../../features/menu/menuHeaderSlice";
import {
  IoIosNotifications,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Search from "../Search";
import Filter from "../Filter";
import Sort from "../Sort";
import UserInfo from "../UserInfo";
import Logout from "../Logout";

type props = {
  showMenuBar: boolean;
};

const TopMenu = ({ showMenuBar }: props) => {
  const { menuValue, hideMenuValue } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  const dispatch = useDispatch();

  return (
    <>
      {showMenuBar ? null : (
        <div
          className={`w-full h-20 flex items-center justify-center absolute top-0 z-10 ${
            hideMenuValue ? "-left-0" : "-left-14"
          } ${!menuValue ? "visible" : "hidden"} }`}>
          <div
            onClick={() => dispatch(hideMenu())}
            className='w-5 h-10 rounded-r-lg cursor-pointer shadow-xl flex items-center justify-center bg-secondary-100'>
            <IoMdArrowDropright />
          </div>
          <div
            onClick={() => dispatch(openMenu())}
            className='w-5 h-10 rounded-l-lg cursor-pointer shadow-xl flex items-center justify-center bg-secondary-100'>
            <IoMdArrowDropleft />
          </div>
        </div>
      )}
      <div
        className={`h-full duration-300 ease-in-out relative w-full ${
          hideMenuValue ? "w-0 hidden" : "w-full"
        }`}>
        <div className='flex items-center justify-around w-full h-[12%] text-secondary-600'>
          <div className='flex items-center font-bold'>
            <div className='flex items-center text-secondary-100 justify-center w-10 h-10 rounded-xl bg-purple-500 ml-3'>
              K
            </div>
            <p className={`${menuValue ? "visible" : "hidden"}`}>پنل ادمین</p>
          </div>
          <FiMenu
            className={`w-6 h-6 cursor-pointer ${
              menuValue ? "visible" : "hidden"
            }`}
            onClick={() => dispatch(closeMenu())}
          />
        </div>
        <div className='w-full overflow-hidden h-[88%] flex items-center justify-around flex-col'>
          <Search />
          <Filter />
          <Sort />
          <UserInfo />
          <div
            className={`flex items-center justify-around w-full ${
              menuValue ? "flex-row" : "flex-col h-32"
            }`}>
            <div
              className={`${
                menuValue ? "w-14 h-14" : "w-12 h-12"
              } rounded-xl cursor-pointer bg-gray-200 flex items-center justify-center`}>
              <IoIosNotifications
                className={`text-gray-400 ${menuValue ? "w-7 h-7" : "w-6 h-6"}`}
              />
            </div>
            <div
              className={`
            ${menuValue ? "w-14 h-14" : "w-12 h-12"}
            hover:text-red-500 cursor-pointer rounded-xl bg-gray-200 flex items-center justify-center`}>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
