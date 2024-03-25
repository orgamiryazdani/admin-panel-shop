import { FaSortAlphaDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Sort = () => {
  return (
    <div className='w-32 h-8 bg-secondary-300 cursor-pointer rounded-md text-secondary-600 text-sm p-2 flex items-center justify-between'>
      <div className='flex items-center'>
        <span>سرت</span>
        <FaSortAlphaDown className='mr-2' />
      </div>
      <IoIosArrowDown />
    </div>
  );
};

export default Sort;
