import { LuMenu } from "react-icons/lu";
import Search from "../Search";
import Filter from "../Filter";
import Sort from "../Sort";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  return (
    <div className='w-screen h-[12%] bg-red-500 flex items-center justify-between px-5 lg:hidden'>
      {/* menu icon */}
      <LuMenu className='text-2xl cursor-pointer' />
      {/* search */}
      <div className='w-2/5'>
        <Search />
      </div>
      {/* filter */}
      <div className='w-36'>
        <Filter />
      </div>
      {/* sort */}
      <div className='w-36'>
        <Sort />
      </div>
      {/* user profile */}
      <Link to="/profile">
        <img
          className='w-12 h-12 object-cover rounded-full'
          src='https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'
          alt='profile image'
        />
      </Link>
    </div>
  );
};

export default HeaderMobile;
