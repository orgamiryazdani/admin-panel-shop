import { FaSortAlphaDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from "./DropDown";
import { useState } from "react";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

const Sort = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [value, setValue] = useState<number[]>([0, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
      className='w-36 h-10 bg-secondary-300 relative text-sm cursor-pointer rounded-xl text-secondary-600 px-4 flex items-center justify-between'>
      <div className='flex items-center font-bold'>
        <span>مرتب سازی</span>
        <FaSortAlphaDown className='mr-2 text-lg' />
      </div>
      <IoMdArrowDropdown className='text-xl' />
      <DropDown show={showDropDown}>
        <div className='w-full h-full p-5'>
          <div className='flex items-center justify-between'>
            <span>قیمت</span>
            <p>
              شروع از {value[0]} تا {value[1]}
            </p>
          </div>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
            min={1}
            max={1000}
          />
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
