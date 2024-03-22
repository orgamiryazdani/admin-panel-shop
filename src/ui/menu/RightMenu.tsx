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
import { useState } from "react";

const menuItems: menuItem = [
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
        path: "/addProduct",
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
        path: "/addProduct",
        icon: <IoAddOutline />,
      },
    ],
  },
];

const RightMenu = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(true);

  return (
    <div
      className={`h-full duration-300 ease-in-out ${
        menu ? "w-full" : "w-28"
      }`}>
      <div
        className={`flex items-center justify-around w-full h-20 text-secondary-600 ${
          menu ? "visible" : "hidden"
        }`}>
        <div
          className={`flex items-center font-bold ${
            menu ? "visible" : "hidden"
          }`}>
          <div className='flex items-center text-secondary-100 justify-center w-10 h-10 rounded-xl bg-purple-500 ml-3'>
            K
          </div>
          <p>پنل ادمین</p>
        </div>
        <FiMenu
          className='w-6 h-6 cursor-pointer'
          onClick={() => setMenu(!menu)}
        />
      </div>
      <div
        className={`w-full h-20 flex items-center justify-center ${
          menu ? "hidden" : "visible"
        }`}>
        <div className='w-5 h-10 rounded-r-lg cursor-pointer border-r border-t border-b shadow-xl flex items-center justify-center bg-secondary-100'>
          <IoMdArrowDropright />
        </div>
        <div
          onClick={() => setMenu(true)}
          className='w-5 h-10 rounded-l-lg cursor-pointer border shadow-xl flex items-center justify-center bg-secondary-100'>
          <IoMdArrowDropleft />
        </div>
      </div>
      <div className='w-full h-auto flex items-center justify-around flex-col'>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className='py-6 w-full'>
            <Link
              to={item.path}
              className={`flex items-center w-full h-auto px-5 py-2 ${
                menu ? "justify-between" : "justify-center"
              }`}>
              <div className='flex items-center'>
                <div
                  className={`text-secondary-400 text-[22px] ${
                    menu
                      ? "ml-4"
                      : "ml-0 w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center shadow-2xl"
                  }`}>
                  {item.icon}
                </div>
                <span
                  className={`${menu ? "visible" : "hidden"} ${
                    pathname == item.path
                      ? "text-secondary-800 font-bold"
                      : "text-secondary-500"
                  }`}>
                  {item.title}
                </span>
              </div>
              <div
                className={`duration-200 ease-in-out text-secondary-500 ${
                  pathname == item.path ? "-rotate-90" : "rotate-0"
                } ${menu ? "visible" : "hidden"}`}>
                <IoIosArrowBack />
              </div>
            </Link>
            <div
              className={`flex flex-col items-center justify-around ${
                menu ? "visible" : "hidden"
              } ${
                pathname == item.path
                  ? "h-auto overflow-visible"
                  : "h-0 overflow-hidden"
              }`}>
              {item.subset?.map((subset) => (
                <Link
                  className='text-xs py-2'
                  to={subset.path}
                  key={subset.id}>
                  <div className='flex items-center'>
                    <div className='text-secondary-400 text-base ml-1'>
                      {subset.icon}
                    </div>
                    <span
                      className={
                        pathname == subset.path
                          ? "text-secondary-800 font-bold"
                          : "text-secondary-500"
                      }>
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
  );
};

export default RightMenu;
