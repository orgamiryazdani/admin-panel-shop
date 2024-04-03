import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { closeHeader } from "../../features/menu/menuHeaderSlice";
import DropDown from "../DropDown";
import { useState } from "react";
import { menuItems } from "../menu/RightMenu";

const RightHeader = () => {
  const [showDropDown, setShowDropDown] = useState(0);
  const { hideHeader } = useSelector((state: RootState) => state.menuHeader);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div
      className={`flex items-center justify-between w-full px-10 relative transition-all duration-300 ease-in-out ${
        hideHeader ? "h-0 -top-10" : "h-full top-0"
      }`}>
      <div className='w-full h-full flex items-center justify-around'>
        {menuItems.map((item) => (
          <Link
            onMouseEnter={() => setShowDropDown(item.id)}
            onMouseLeave={() => setShowDropDown(0)}
            to={item.path}
            key={item.id}
            className='flex items-center justify-between h-12 relative text-secondary-400 w-44'>
            <div className='flex items-center'>
              <span className='ml-2 text-2xl'>{item.icon}</span>
              <span className={item.path == pathname ? "font-bold" : ""}>{item.title}</span>
            </div>
            <IoIosArrowDown />
            <DropDown show={item.id == showDropDown ? true : false}>
              {item.subset?.map((subset) => (
                <Link to={subset.path} className='flex items-center text-sm p-2'>
                  <FaPlus />
                  <p className={`${subset.path == pathname ? "font-bold" : ""} pr-2 pt-1`}>{subset.title}</p>
                </Link>
              ))}
            </DropDown>
          </Link>
        ))}
      </div>

      <div
        onClick={() => dispatch(closeHeader())}
        className={`bg-secondary-100 flex items-end justify-center left-10 rounded-b-xl w-14 h-6 absolute pb-1 cursor-pointer transition-all duration-300 ease-in-out ${
          hideHeader ? "top-10" : "top-[72px]"
        }`}>
        <IoIosArrowUp
          className={`transition-all duration-300 ease-in-out ${
            hideHeader ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default RightHeader;