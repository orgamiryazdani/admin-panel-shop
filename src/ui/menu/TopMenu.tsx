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
import { FaSortAlphaDown } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";

type props = {
  showMenuBar: boolean;
};

const TopMenu = ({ showMenuBar }: props) => {
  const { menuValue, hideMenuValue, changeMenuHeaderUi } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (changeMenuHeaderUi == false) {
      setShowSearch(false);
    }
  }, [changeMenuHeaderUi]);

  return (
    <>
      {showMenuBar ? null : (
        <div
          className={`w-full h-20 flex items-center justify-center absolute top-0 z-50 ${
            hideMenuValue ? "-left-0" : "-left-14"
          } ${!menuValue ? "visible" : "hidden"} }`}>
          <div
            onClick={() => dispatch(hideMenu(), setShowSearch(false))}
            className='w-5 h-10 rounded-r-lg cursor-pointer shadow-xl flex items-center justify-center bg-secondary-100'>
            <IoMdArrowDropright />
          </div>
          <div
            onClick={() => dispatch(openMenu(), setShowSearch(false))}
            className='w-5 h-10 rounded-l-lg cursor-pointer shadow-xl flex items-center justify-center bg-secondary-100'>
            <IoMdArrowDropleft />
          </div>
        </div>
      )}
      <div
        className={`h-full duration-300 ease-in-out relative w-full z-10 ${
          hideMenuValue ? "w-0 hidden" : "w-full"
        }`}>
        <div className='flex items-center justify-around bg-white w-full h-[12%] text-secondary-600'>
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

        <div className='w-full h-[88%] flex items-center justify-around flex-col bg-white'>
          {menuValue ? (
            <>
              <div className='w-56'>
                <Search />
              </div>
              <div className='w-56'>
                <Filter />
              </div>
              <div className='w-56'>
                <Sort />
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => setShowSearch(!showSearch)}
                className={`flex items-center justify-start relative text-gray-500 bg-white shadow-2xl shadow-gray-600 cursor-pointer w-12 pr-3 h-10 text-xl ${
                  !showSearch ? "rounded-xl" : "rounded-r-xl"
                }`}>
                <IoSearch />
                <input
                  type='search'
                  placeholder='جستجو...'
                  className={`transition-all ease-in-out duration-300 h-10 rounded-l-xl bg-secondary-200 absolute right-12 z-50 shadow-2xl shadow-gray-400 ${
                    showSearch && !menuValue ? "w-56 px-3" : "w-0"
                  }
                ${menuValue && !changeMenuHeaderUi && "hidden"}
                `}
                />
              </div>
              <div className='w-12 h-12 bg-secondary-100 text-gray-500 text-2xl shadow-2xl shadow-gray-600 flex items-center justify-center rounded-xl cursor-pointer'>
                <VscSettings />
              </div>
              <div className='w-12 h-12 bg-secondary-100 text-gray-500 text-xl shadow-2xl shadow-gray-600 flex items-center justify-center rounded-xl cursor-pointer'>
                <FaSortAlphaDown />
              </div>
            </>
          )}
          <div
            className={`flex w-56 h-28 ${
              !menuValue && "flex-col"
            } items-center justify-around`}>
            <UserInfo />
          </div>
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
