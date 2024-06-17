import { MdDelete, MdEdit } from "react-icons/md";
import truncateText from "../utils/truncateText";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Modal from "./Modal";

const ProductCart = (id: number) => {
  const [showMoreDesc, setShowMoreDesc] = useState<number | null>(null);
  const [showOptionProduct, setShowaOptionProduct] = useState<number | null>(
    null,
  );
  const [showInputEdit, setShowInputEdi] = useState<number | null>(null);
  const [showModalDelete, setShowModalDelete] = useState(false);

  return (
    <div
      className={`flex-grow basis-72 relative max-w-96 ${
        showMoreDesc == id ? "h-auto" : "h-60"
      } rounded-xl shadow-sm bg-secondary-100 overflow-hidden`}>
      {/* option products */}
      <div
        onClick={() => setShowaOptionProduct(null)}
        className={`w-full ${
          showOptionProduct ? "h-full" : "h-0"
        } absolute bg-opacity-50 bg-slate-400`}>
        <div
          className={`absolute bottom-0 z-50 w-full bg-secondary-200 ${
            showOptionProduct ? "h-[110px]" : "h-0"
          } overflow-hidden transition-all duration-300 ease-in-out rounded-t-xl px-4`}>
          <div className='w-full flex justify-center mt-3'>
            <span className='w-12 h-[10px] rounded-3xl bg-secondary-400'></span>
          </div>
          <span
            onClick={() => {
              setShowInputEdi(id);
              setShowMoreDesc(id);
            }}
            className='flex items-center w-fit cursor-pointer gap-2 text-sm mt-4'>
            <MdEdit className='text-base ' /> ویرایش محصول
          </span>
          <span
            onClick={() => setShowModalDelete(true)}
            className='flex items-center w-fit cursor-pointer gap-2 text-sm mt-[14px]'>
            <MdDelete className='text-lg text-red-500' /> حذف محصول
          </span>
          {/* modal delete */}
          <Modal
            onClose={() => setShowModalDelete(false)}
            open={showModalDelete}
            title='آیا از حذف این محصول مطمعن هستید؟'>
            <div className='w-full flex items-center justify-between text-secondary-100'>
              <button className='w-[48%] h-11 rounded-xl bg-secondary-700'>
                بله !
              </button>
              <button onClick={() => setShowModalDelete(false)} className='w-[48%] h-11 rounded-xl bg-red-500'>
                خیر
              </button>
            </div>
          </Modal>
        </div>
      </div>
      {/* image and setting icon */}
      <div className='flex w-full mt-3 pl-3 justify-between'>
        <HiOutlineDotsVertical
          onClick={() => setShowaOptionProduct(id)}
          className='mt-[2px] cursor-pointer'
        />
        <img
          className='w-full h-4/5 max-h-36 object-cover rounded-lg'
          src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
          alt='product image'
        />
      </div>
      {/* title and description */}
      <div
        dir='ltr'
        className='flex flex-col pt-2 pl-3 pr-3'>
        <input
          type='text'
          // value='text'
          defaultValue='Title'
          readOnly={showInputEdit !== id}
          className={
            showInputEdit == id
              ? "border border-blue-500 rounded-lg px-2 h-8 mb-2"
              : ""
          }
          autoFocus={showInputEdit === id}
          key={showInputEdit === id ? "focused" : "unfocused"}
        />
        <textarea
          // value='text'
          readOnly={showInputEdit !== id}
          className={` text-xs pr-1 overflow-auto h-9 ${
            showInputEdit === id
              ? "border border-blue-500 rounded-lg px-2 mb-2 min-h-40 p-1"
              : showMoreDesc === id
              ? "min-h-40"
              : ""
          }`}
          value={
            showMoreDesc === id
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              : truncateText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  100,
                )
          }></textarea>
        {/* button edit */}
        {showInputEdit === id ? (
          <div className='w-full flex items-center justify-between text-secondary-100 my-2'>
            <button
              onClick={() => {
                setShowInputEdi(null);
                setShowMoreDesc(null);
              }}
              className='w-[48%] h-11 rounded-xl bg-red-500'>
              لغو
            </button>
            <button className='w-[48%] h-11 rounded-xl bg-secondary-700'>
              ذخیره
            </button>
          </div>
        ) : null}
        {/* show more arrow icon */}
        <div
          className={`w-full flex items-end justify-center ${
            showMoreDesc ? "shadow-none" : "shadow-white shadow-lg"
          } rotate-180 bg-transparent`}>
          <IoIosArrowUp
            onClick={() => {
              setShowMoreDesc(id === showMoreDesc ? null : id);
              setShowInputEdi(null);
            }}
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
