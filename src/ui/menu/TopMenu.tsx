import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  closeMenu,
  hideMenu,
  openMenu,
} from "../../features/menu/menuHeaderSlice";
import {
  IoIosNotifications,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Search from "../Search";
import Filter from "../Filter";
import Sort from "../Sort";
import UserInfo from "../UserInfo";
import Logout from "../Logout";
import { FaSortAlphaDown } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import useCategories from "../../hooks/useCategories";
import { useSearchParams } from "react-router-dom";
import { Slider } from "@mui/material";
import Loading from "../Loading";

type props = {
  showMenuBar: boolean;
};

function valuetext(value: number) {
  return `${value}°C`;
}

const TopMenu = ({ showMenuBar }: props) => {
  const { menuValue, hideMenuValue, changeMenuHeaderUi } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [showModalSort, setShowModalSort] = useState(false);

  const { data, isLoading } = useCategories();
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

  function filterHandler(id: number) {
    searchParams.set("categoryId", id.toString());
    setSearchParams(searchParams);
  }

  useEffect(() => {
    if (changeMenuHeaderUi == false) {
      setShowSearch(false);
    }
  }, [changeMenuHeaderUi]);

  return (
    <>
      {/* sort modal */}
      <Modal
        open={showModalSort}
        onClose={() => setShowModalSort(false)}
        title='سرت بر اساس قیمت'>
        <div className='w-full flex items-center justify-between px-1'>
          <span>بیشترین</span>
          <span>
            شروع قیمت از {value[0]} تا {value[1]}
          </span>
          <span>کمترین</span>
        </div>
        <div className='px-3'>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
            min={1}
            max={1000}
          />
        </div>
      </Modal>
      {/* filter modal */}
      <Modal
        open={showModalFilter}
        onClose={() => setShowModalFilter(false)}
        title='فیلتر بر اساس دسته بندی'>
        <select
          className='w-full h-11 rounded-xl px-2'
          name=''
          id=''
          onChange={(e) => filterHandler(Number(e.target.value))}>
          <option value=''>همه محصولات</option>
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((item) => (
              <option
                key={item.id}
                value={item.id}>
                {item.name}
              </option>
            ))
          )}
        </select>
      </Modal>
      {showMenuBar ? null : (
        <div
          className={`w-full h-20 flex items-center justify-center absolute top-0 z-40 ${
            hideMenuValue ? "-left-0" : "-left-14"
          } ${!menuValue ? "visible" : "hidden"} }`}>
          <div
            onClick={() => dispatch(hideMenu(), setShowSearch(false))}
            className='w-5 h-10 rounded-r-lg cursor-pointer shadow-xl flex items-center justify-center bg-secondary-100'>
            <IoMdArrowDropright />
          </div>
          <div
            onClick={() => dispatch(openMenu(), setShowSearch(false))}
            className='w-5 h-10 rounded-l-lg cursor-pointer shadow-xl flex items-center justify-center bg-secondary-100'>
            <IoMdArrowDropleft />
          </div>
        </div>
      )}
      <div
        className={`h-full duration-300 ease-in-out min-w-[98px] relative w-full z-10 ${
          hideMenuValue ? "w-0 hidden" : "w-full"
        }`}>
        <div className='flex items-center justify-around bg-white w-full h-[12%] text-secondary-600'>
          <div className='flex items-center font-bold'>
            <div className='flex items-center text-secondary-100 justify-center w-10 h-10 rounded-xl bg-purple-500 ml-3'>
              K
            </div>
            <p className={`${menuValue ? "visible" : "hidden"}`}>پنل ادمین</p>
          </div>
          <FiMenu
            className={`w-6 h-6 cursor-pointer ${
              menuValue ? "visible" : "hidden"
            }`}
            onClick={() => dispatch(closeMenu())}
          />
        </div>

        <div className='w-full h-[88%] flex items-center justify-around flex-col bg-white'>
          {menuValue ? (
            <>
              <div className='xl:w-56 lg:w-44'>
                <Search />
              </div>
              <div className='xl:w-56 lg:w-44'>
                <Filter />
              </div>
              <div className='xl:w-56 lg:w-44'>
                <Sort />
              </div>
            </>
          ) : (
            <>
              {/* search */}
              <div
                className={`flex items-center justify-start relative text-gray-500 bg-white shadow-2xl shadow-gray-600 cursor-pointer w-12 h-10 text-xl ${
                  !showSearch ? "rounded-xl" : "rounded-r-xl"
                }`}>
                <div
                  className='w-full h-full flex items-center justify-center'
                  onClick={() => setShowSearch(!showSearch)}>
                  <IoSearch />
                </div>
                <input
                  type='search'
                  placeholder='جستجو...'
                  className={`transition-all ease-in-out duration-300 h-10 rounded-l-xl bg-secondary-200 absolute right-12 z-50 shadow-2xl shadow-gray-400 ${
                    showSearch && !menuValue ? "w-56 px-3" : "w-0"
                  }
                ${menuValue && !changeMenuHeaderUi && "hidden"}
                `}
                />
              </div>
              {/* filter category */}
              <div
                onClick={() => setShowModalFilter(true)}
                className='w-12 h-12 bg-secondary-100 text-gray-500 text-2xl shadow-2xl shadow-gray-600 flex items-center justify-center rounded-xl cursor-pointer'>
                <VscSettings />
              </div>
              {/* sort price */}
              <div
                onClick={() => setShowModalSort(true)}
                className='w-12 h-12 bg-secondary-100 text-gray-500 text-xl shadow-2xl shadow-gray-600 flex items-center justify-center rounded-xl cursor-pointer'>
                <FaSortAlphaDown />
              </div>
            </>
          )}
          <div
            className={`flex w-56 h-28 ${
              !menuValue && "flex-col"
            } items-center justify-around`}>
            <UserInfo />
          </div>
          <div
            className={`flex items-center justify-around w-full ${
              menuValue ? "flex-row" : "flex-col h-32"
            }`}>
            <div
              className={`${
                menuValue ? "w-14 h-14" : "w-12 h-12"
              } rounded-xl cursor-pointer bg-gray-200 flex items-center justify-center`}>
              <IoIosNotifications
                className={`text-gray-400 ${menuValue ? "w-7 h-7" : "w-6 h-6"}`}
              />
            </div>
            <div
              className={`
            ${menuValue ? "w-14 h-14" : "w-12 h-12"}
            hover:text-red-500 cursor-pointer rounded-xl bg-gray-200 flex items-center justify-center`}>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
