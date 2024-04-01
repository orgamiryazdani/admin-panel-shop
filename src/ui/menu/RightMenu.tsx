import { FiMenu } from "react-icons/fi";
import { menuItem } from "../../types/MenuItem";
import {
  IoIosArrowBack,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMenu,
  hideMenu,
  openMenu,
} from "../../features/menu/menuHeaderSlice";
import { RootState } from "../../store";

const menuItems: menuItem[] = [
  {
    id: 1,
    title: "محصولات",
    icon: <BsFillBoxSeamFill />,
    path: "/",
    subset: [
      {
        id: 1,
        title: "اضافه کردن محصول",
        path: "/addProduct",
        icon: <IoAddOutline />,
      },
    ],
  },
  {
    id: 2,
    title: "دسته بندی ها",
    path: "/category",
    icon: <BiSolidCategoryAlt />,
    subset: [
      {
        id: 1,
        title: "اضافه کردن دسته بندی",
        path: "/add-category",
        icon: <IoAddOutline />,
      },
    ],
  },
  {
    id: 3,
    path: "/users",
    title: "کاربران",
    icon: <FaUsers />,
    subset: [
      {
        id: 1,
        title: "اضافه کردن کاربر",
        path: "/user",
        icon: <IoAddOutline />,
      },
    ],
  },
];

type props = {
  showMenuBar: boolean;
};

const RightMenu = ({ showMenuBar }: props) => {
  const { pathname } = useLocation();

  const { menuValue, hideMenuValue } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  const dispatch = useDispatch();

  const checkMenuTrue = (item: menuItem) => {
    if (item.subset?.some((s) => pathname == s.path)) {
      return true;
    } else if (item.path == pathname) {
      return true;
    }
  };

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
        <div className='flex items-center justify-around w-full h-20 text-secondary-600'>
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

        <div className='w-full h-auto flex items-center justify-around flex-col'>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className='py-6 w-full'>
              <Link
                to={item.path}
                className={`flex items-center w-full h-auto px-5 py-2 ${
                  menuValue ? "justify-between" : "justify-center"
                }`}>
                <div className='flex items-center'>
                  <div
                    className={`text-secondary-400 transition-all duration-300 ease-in-out text-[22px] 
                    ${
                      item.path == pathname && menuValue == false
                        ? "bg-secondary-800 !text-secondary-100"
                        : ""
                    }
                    ${
                      menuValue
                        ? "ml-4"
                        : "ml-0 w-12 h-12 rounded-xl bg-secondary-100 z-20 shadow-2xl shadow-gray-500 flex items-center justify-center"
                    }`}>
                    {item.icon}
                  </div>
                  <span
                    className={`${menuValue ? "visible" : "hidden"} ${
                      pathname == item.path
                        ? "text-secondary-800 font-bold"
                        : "text-secondary-500"
                    }`}>
                    {item.title}
                  </span>
                </div>
                <div
                  className={`duration-200 ease-in-out text-secondary-500 ${
                    checkMenuTrue(item) == true ? "-rotate-90" : "rotate-0"
                  } ${menuValue ? "visible" : "hidden"}`}>
                  <IoIosArrowBack />
                </div>
              </Link>
              <div
                className={`flex flex-col items-center justify-around  ${
                  checkMenuTrue(item) == true
                    ? "h-auto overflow-visible"
                    : "h-0 overflow-hidden"
                } ${menuValue ? "" : "h-auto overflow-visible"}`}>
                {item.subset?.map((subset) => (
                  <Link
                    className='text-xs py-2'
                    to={subset.path}
                    key={subset.id}>
                    <div className='flex items-center'>
                      <div
                        className={`text-base ml-1 duration-300 transition-all ease-in-out ${
                          menuValue
                            ? "text-secondary-500"
                            : "w-6 h-6 bg-secondary-300 text-secondary-400 shadow-lg shadow-gray-300 rounded-lg flex items-center justify-center"
                        } ${
                          pathname == subset.path && menuValue == false
                            ? "bg-secondary-400 !text-secondary-100 w-6 h-6 rounded-2xl"
                            : "text-secondary-400"
                        }`}>
                        {subset.icon}
                      </div>
                      <span
                        className={`
                          ${
                            pathname == subset.path
                              ? "text-secondary-800 font-bold"
                              : "text-secondary-500"
                          }
                            ${menuValue ? "visible" : "hidden"}`}>
                        {subset.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightMenu;