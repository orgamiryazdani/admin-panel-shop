import { FC } from "react";
import Search from "../Search";
import UserInfo from "../UserInfo";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { FaSortAlphaDown } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const TopHeader: FC = () => {
  return (
    <div className='flex items-center justify-between w-full h-full px-10 relative'>
      <Search />
      <div className='w-32 h-8 border-b flex items-center justify-between'>
        <div className='flex items-center'>
          <span>فیلتر</span>
          <VscSettings className='mr-2' />
        </div>
        <IoIosArrowDown />
      </div>
      <div className='w-32 h-8 bg-secondary-300  p-2 flex items-center justify-between'>
        <div className='flex items-center'>
          <span>سرت</span>
          <FaSortAlphaDown className='mr-2' />
        </div>
        <IoIosArrowDown />
      </div>
      <div className='flex items-center'>
        <div className='w-20 h-9 flex flex-wrap gap-x-3 gap-y-2'>
          <div className='bg-secondary-400  shadow-gray-100 rounded-sm w-full h-2/6'></div>
          <div className='bg-secondary-400  shadow-gray-100 rounded-sm w-1/6 h-4/6'></div>
          <div className='bg-secondary-400  shadow-gray-100 rounded-sm w-4/6 h-4/6 mr-0'></div>
        </div>
        <IoIosArrowDown className='mr-3' />
      </div>
      <UserInfo />
      <div className='bg-secondary-100 flex items-end justify-center left-10 rounded-b-xl w-14 h-6 absolute top-[72px] pb-1 cursor-pointer'>
        <IoIosArrowUp />
      </div>
      <CiLogout className='text-red-500 w-6 h-6 cursor-pointer' />
    </div>
  );
};

export default TopHeader;
