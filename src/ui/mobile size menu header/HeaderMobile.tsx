import { LuMenu } from "react-icons/lu";
import Search from "../Search";
import Filter from "../Filter";
import Sort from "../Sort";
import { Link, useSearchParams } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { openMenuMobile } from "../../features/menu/menuHeaderSlice";
import Modal from "../Modal";
import useCategories from "../../hooks/useCategories";
import Loading from "../Loading";
import { useState } from "react";
import SortPriceSlider from "../SortPriceSlider";

const HeaderMobile = () => {
  const dispatch = useDispatch();
  const [showModalFilter, setShowModalFilter] = useState(false);
  const { data, isLoading } = useCategories();
  const [searchParams] = useSearchParams();

  return (
    <div className='w-screen md:h-[12%] h-auto flex flex-col md:flex-row items-center justify-between md:px-5 px-2 lg:hidden py-2 md:py-0'>
      <div className='w-full md:w-2/5 flex items-center justify-between'>
        {/* menu icon */}
        <LuMenu
          onClick={() => dispatch(openMenuMobile())}
          className='text-2xl cursor-pointer'
        />
        {/* search */}
        <div className='w-[72%]'>
          <Search />
        </div>
        {/* user profile */}
        <Link
          to='/profile'
          className='md:hidden flex'>
          <img
            className='w-10 h-10 object-cover rounded-full'
            src='https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'
            alt='profile image'
          />
        </Link>
      </div>
      {/* filter and sort */}
      <div className='flex items-center justify-between w-full px-1 mt-3 md:mt-0 md:w-auto gap-10'>
        {/* filter md: */}
        <div className='w-36 md:flex hidden'>
          <Filter />
        </div>
        {/* sort md: */}
        <div className='w-36 md:flex hidden'>
          <Sort />
        </div>
        {/* filter and sort xs: */}
        <div
          onClick={() => setShowModalFilter(true)}
          className='md:hidden w-full h-10 cursor-pointer flex items-center justify-center bg-secondary-200 rounded-xl'>
          فیلتر محصولات <VscSettings className='mr-2' />
        </div>
        {/* modal */}
        <Modal
          title='فیلتر و سرت بر اساس دسته بندی و قیمت'
          open={showModalFilter}
          onClose={() => setShowModalFilter(false)}>
          <select className='w-full bg-secondary-200 p-2 rounded-xl mb-5 cursor-pointer'>
            <option value=''>همه محصولات</option>
            {isLoading ? (
              <Loading />
            ) : (
              data?.map((data) => (
                <option
                  key={data.id}
                  value={data.id}>
                  {data.name}
                </option>
              ))
            )}
          </select>
          <div className='w-full flex items-center justify-between px-1 pt-5 border-t'>
            <span>بیشترین</span>
            <p>
              شروع از {searchParams.get("price_min")} تا{" "}
              {searchParams.get("price_max")}
            </p>
            <span>کمترین</span>
          </div>
          <div className='px-3'>
            <SortPriceSlider />
          </div>
        </Modal>
      </div>
      {/* user profile */}
      <Link
        to='/profile'
        className='hidden md:flex'>
        <img
          className='w-11 h-11 object-cover rounded-full'
          src='https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'
          alt='profile image'
        />
      </Link>
    </div>
  );
};

export default HeaderMobile;
