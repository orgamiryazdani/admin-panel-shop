import { FC } from "react";
import Search from "../Search";
import UserInfo from "../UserInfo";
import { IoIosArrowUp, IoIosNotifications } from "react-icons/io";
import Filter from "../Filter";
import Sort from "../Sort";
import Logout from "../Logout";
import { useDispatch, useSelector } from "react-redux";
import { closeHeader } from "../../features/menu/menuHeaderSlice";
import { RootState } from "../../store";

const TopHeader: FC = () => {
  const { hideHeader } = useSelector((state: RootState) => state.menuHeader);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex items-center justify-between w-full px-10 relative transition-all duration-300 ease-in-out ${
        hideHeader ? "h-0 -top-10" : "h-full top-0"
      }`}>
      <Search />

      <IoIosNotifications className='text-gray-300 w-7 h-7' />
      <Filter />
      <Sort />
      <UserInfo />
      <div className='w-[1px] h-10 bg-gray-200'></div>
      <Logout />
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

export default TopHeader;
