import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openMenuMobile } from "../../features/menu/menuHeaderSlice";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { menuItem } from "../../types/MenuItem";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { checkMenuTrue } from "../menu/RightMenu";

export const menuItems: menuItem[] = [
  {
    id: 1,
    title: "محصولات",
    icon: <BsFillBoxSeamFill />,
    path: "/",
    subset: [
      {
        id: 1,
        title: "اضافه کردن محصول",
        path: "/add-product",
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

const MenuMobile = () => {
  const { menuMobileValue } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <>
      <div
        onClick={() => dispatch(openMenuMobile())}
        className={`backdrop-blur-sm absolute top-0 left-0 ${
          menuMobileValue ? "w-full" : "w-0"
        } lg:hidden h-screen bg-opacity-0 z-40`}></div>
      <div
        className={`${
          menuMobileValue ? "w-72" : "w-0 px-0"
        } z-50 h-screen lg:hidden bg-secondary-100 overflow-hidden px-5 text-secondary-400 shadow-2xl transition-all ease-in-out duration-300 absolute`}>
        {menuItems.map((item) => (
          <>
            <Link
              key={item.id}
              to={item.path}
              className='w-full flex justify-between items-center mt-14'>
              <div className='flex items-center gap-2'>
                {item.icon}
                <span className={item.path == pathname ? "font-bold" : ""}>
                  {item.title}
                </span>
              </div>
              <IoIosArrowBack
                className={`transition-all duration-300 ease-in-out ${
                  checkMenuTrue(item, pathname) ? "-rotate-90" : ""
                }`}
              />
            </Link>
            {item.subset?.map((subset) =>
              item.path == pathname || subset.path == pathname ? (
                <Link
                  key={subset.id}
                  to={subset.path}
                  className='text-sm font-normal flex items-center gap-1 mt-5 mr-5'>
                  <span className='text-lg'>{subset.icon}</span>
                  <span className={subset.path == pathname ? "font-bold" : ""}>
                    {subset.title}
                  </span>
                </Link>
              ) : null,
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default MenuMobile;