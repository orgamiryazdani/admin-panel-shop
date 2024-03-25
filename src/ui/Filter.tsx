import { IoIosArrowDown } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

const Filter = () => {
  return (
    <div className='w-32 h-8 bg-secondary-300 cursor-pointer p-2 rounded-md text-secondary-600 text-sm flex items-center justify-between'>
      <div className='flex items-center'>
        <span>فیلتر</span>
        <VscSettings className='mr-2' />
      </div>
      <IoIosArrowDown />
    </div>
  );
};

export default Filter;
