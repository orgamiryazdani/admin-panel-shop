import { FaSortAlphaDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from "./DropDown";
import { useState } from "react";
import SortPriceSlider from "./SortPriceSlider";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchParams] = useSearchParams();

  return (
    <div
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
      className='w-full h-10 bg-secondary-300 relative text-sm px-4 cursor-pointer rounded-xl text-secondary-600 flex items-center justify-between'>
      <div className='flex items-center font-bold lg:text-[10px] xl:text-base'>
        <span>مرتب سازی</span>
        <FaSortAlphaDown className='mr-2' />
      </div>
      <IoMdArrowDropdown className='lg:text-xs xl:text-xl rotate-0' />
      <DropDown show={showDropDown}>
        <div className='w-full h-full p-5'>
          <div className='flex items-center justify-between'>
            <span>قیمت</span>
            <p>
              شروع از {searchParams.get("price_min")} تا{" "}
              {searchParams.get("price_max")}
            </p>
          </div>
          {/* slider price */}
          <SortPriceSlider />
          <div className='w-full flex items-center justify-between'>
            <span>بیشترین</span>
            <span>کمترین</span>
          </div>
        </div>
      </DropDown>
    </div>
  );
};

export default Sort;
