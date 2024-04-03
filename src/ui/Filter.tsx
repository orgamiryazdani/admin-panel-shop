import { IoMdArrowDropdown } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import DropDown from "./DropDown";
import { useState } from "react";
import useCategories from "../hooks/useCategories";
import { category } from "../types/Category";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
import { widthProp } from "../types/WidthProp";

const Filter = ({ width = 36 }: widthProp) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { data, isLoading } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("categoryId") || "";

  function handleClick(id: number) {
    searchParams.set("categoryId", id.toString());
    setSearchParams(searchParams);
  }

  return (
    <div
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
      className={`w-${width} h-10 relative bg-secondary-300 text-sm cursor-pointer px-4 rounded-xl text-secondary-600 flex items-center justify-between`}>
      <div className='flex items-center font-bold'>
        <span>فیلتر</span>
        <VscSettings className='mr-2 text-lg' />
      </div>
      <IoMdArrowDropdown className='text-xl' />
      <DropDown show={showDropDown}>
        <div className='w-full h-full p-3'>
          <p className='border-b bottom-1 w-full'>دسته بندی</p>
          <div
            className='flex flex-col mt-1 max-h-56 overflow-auto'
            dir='ltr'>
            {isLoading ? (
              <div className='w-full flex items-center justify-center'>
                <Loading />
              </div>
            ) : (
              data?.map((item: category) => (
                <span
                  className={`mt-1 hover:bg-secondary-500 p-1 rounded ${
                    parseInt(currentFilter) == item.id ? "bg-secondary-500" : ""
                  }`}
                  key={item.id}
                  onClick={() => handleClick(item.id)}>
                  {item.name}
                </span>
              ))
            )}
          </div>
        </div>
      </DropDown>
    </div>
  );
};

export default Filter;
