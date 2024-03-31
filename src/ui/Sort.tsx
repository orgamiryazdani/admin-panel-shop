import { FaSortAlphaDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Sort = () => {
  return (
    <div className='w-36 h-11 bg-secondary-300 cursor-pointer rounded-3xl text-secondary-600 text-sm px-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <span>سرت</span>
        <FaSortAlphaDown className='mr-2' />
      </div>
      <IoMdArrowDropdown className='text-secondary-700 text-xl' />
    </div>
  );
};

export default Sort;
