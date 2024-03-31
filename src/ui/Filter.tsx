import { IoMdArrowDropdown } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

const Filter = () => {
  return (
    <div className='w-36 h-11 bg-secondary-300 cursor-pointer px-4 rounded-3xl text-secondary-600 text-sm flex items-center justify-between'>
      <div className='flex items-center'>
        <span>فیلتر</span>
        <VscSettings className='mr-2' />
      </div>
      <IoMdArrowDropdown className='text-secondary-700 text-xl' />
    </div>
  );
};

export default Filter;
