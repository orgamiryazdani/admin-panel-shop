import { MdDelete, MdEdit } from "react-icons/md";
import truncateText from "../utils/truncateText";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ProductCart = (id: number) => {
  const [showMoreDesc, setShowMoreDesc] = useState<number | null>(null);

  return (
    <div
      className={`flex-grow basis-72 max-w-96 ${
        showMoreDesc == id ? "h-auto" : "h-60"
      } p-3 pr-[1px] pb-0 rounded-lg shadow-sm bg-secondary-100 overflow-hidden`}>
      <div className='flex w-full justify-between'>
        <HiOutlineDotsVertical className="mt-[2px] cursor-pointer"/>
        <img
          className='w-full h-4/5 max-h-36 object-cover rounded-lg'
          src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
          alt='product image'
        />
      </div>
      {/* title and description */}
      <div
        dir='ltr'
        className='flex flex-col pt-2 '>
        <p>Title</p>
        <p className='text-xs'>
          {showMoreDesc == id
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            : truncateText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                100,
              )}
        </p>
        {/* <MdEdit />
        <MdDelete /> */}
        <div
          className={`w-full flex items-end justify-center ${
            showMoreDesc ? "shadow-none" : "shadow-white shadow-lg"
          } rotate-180 bg-transparent`}>
          <IoIosArrowUp
            onClick={() => setShowMoreDesc(id === showMoreDesc ? null : id)}
            className={`cursor-pointer w-10 h-4 text-secondary-400 transition-all ease-in-out duration-200 ${
              showMoreDesc ? "rotate-180 my-1" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
