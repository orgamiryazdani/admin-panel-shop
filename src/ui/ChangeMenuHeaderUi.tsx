import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  changeUiMenuHeader,
  hideSetting,
} from "../features/menu/menuHeaderSlice";

const ChangeMenuHeaderUi = () => {
  const [showItem, setShowItem] = useState(false);
  const { hideSettings } = useSelector((state: RootState) => state.menuHeader);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute left-5 top-1/2 shadow-xl text-xl rounded-xl bg-secondary-100 text-secondary-600 ${
        hideSettings ? "p-0" : "p-0"
      }`}>
      <div
        onClick={() => {
          setShowItem(false);
          dispatch(changeUiMenuHeader());
        }}
        className={`flex items-center justify-center transition-all overflow-hidden duration-200 ease-in-out cursor-pointer
        ${hideSettings ? "w-0" : "w-14"}
        ${showItem ? "h-10 pt-2" : "h-0"}`}>
        <div className='w-10 h-full flex flex-col gap-y-1'>
          <div className='rounded-sm w-full h-2/6 settingShowAnimationWidth'></div>
          <div className='w-full h-4/6 gap-x-1 flex'>
            <div className='rounded-sm w-1/4 h-full settingShowAnimationHeight'></div>
            <div className='bg-secondary-800 rounded-sm w-3/4 h-full mr-0'></div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowItem(!showItem)}
        className={`cursor-pointer z-50 h-14 transition-all duration-700 ease-in-out flex items-center justify-center 
        ${hideSettings ? "w-0" : "w-14"}
        ${showItem ? "rotate-180" : "-rotate-180"}`}>
        <IoSettingsOutline />
      </div>
      <div
        onClick={() => dispatch(hideSetting())}
        className={`absolute z-10 top-3 text-sm transition-all duration-300 ease-in-out bg-secondary-100 cursor-pointer rounded-l-3xl w-5 h-8 flex items-center justify-end text-secondary-600 ${
          hideSettings ? "rotate-180 -left-5 shadow-xl" : "-left-3"
        }`}>
        <IoIosArrowBack />
      </div>
    </div>
  );
};

export default ChangeMenuHeaderUi;
