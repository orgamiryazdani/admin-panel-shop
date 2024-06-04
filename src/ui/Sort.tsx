import { FaSortAlphaDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from "./DropDown";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { useSearchParams } from "react-router-dom";

function valuetext(value: number) {
  return `${value}°C`;
}

const Sort = () => {
  
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<number[]>([
    Number(searchParams.get("price_min")) || 0,
    Number(searchParams.get("price_max")) || 1000,
  ]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(Array.isArray(newValue) ? newValue : [newValue]);
    if (Array.isArray(newValue)) {
      searchParams.set("price_min", newValue[0].toString());
      searchParams.set("price_max", newValue[1].toString());
    } else {
      searchParams.set("price_min", newValue.toString());
      searchParams.set("price_max", newValue.toString());
    }
    setSearchParams(searchParams);
  };

  return (
    <div
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
      className='w-full h-10 bg-secondary-300 relative text-sm px-4 cursor-pointer rounded-xl text-secondary-600 flex items-center justify-between'>
      <div className='flex items-center font-bold'>
        <span>مرتب سازی</span>
        <FaSortAlphaDown className='mr-2' />
      </div>
      <IoMdArrowDropdown className="text-xl rotate-0" />
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
