import { MdDelete, MdEdit } from "react-icons/md";
import truncateText from "../utils/truncateText";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Modal from "./Modal";
import { product } from "../types/Product";

type props = { product: product };

const ProductCart = ({ product }: props) => {
  const { id, title, price, description, images } = product;

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
              <button
                onClick={() => setShowModalDelete(false)}
                className='w-[48%] h-11 rounded-xl bg-red-500'>
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
          className='w-full h-4/5 max-h-36 min-h-36 object-cover rounded-lg'
          src={images[0]}
          alt={title}
        />
      </div>
      {/* title and description */}
      <div
        dir='ltr'
        className='flex flex-col pt-2 pl-3 pr-3'>
        <div className='flex items-center justify-between pr-1'>
          <input
            type='text'
            value={showInputEdit ? title : truncateText(title, 30)}
            readOnly={showInputEdit !== id}
            className={`w-[85%] font-semibold ${
              showInputEdit == id
                ? "border border-blue-500 rounded-lg px-2 h-8 mb-2"
                : ""
            }`}
            autoFocus={showInputEdit === id}
            key={showInputEdit === id ? "focused" : "unfocused"}
          />
          <span className='text-sm text-green-600'>$ {price}</span>
        </div>
        <textarea
          readOnly={showInputEdit !== id}
          className={` text-xs pr-1 h-9 overflow-hidden ${
            showInputEdit === id
              ? "border border-blue-500 !overflow-auto rounded-lg px-2 mb-2 min-h-[85px] p-1"
              : showMoreDesc === id
              ? "min-h-[85px] !overflow-auto"
              : ""
          }`}
          value={
            showMoreDesc === id ? description : truncateText(description, 100)
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
        {description.length > 100 ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default ProductCart;