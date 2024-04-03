import { ReactNode } from "react";

type Props = {
  show: boolean;
  children: ReactNode;
};

const DropDown = ({ show, children }: Props) => {
  return (
    <>
      <div
        className={`w-56 transition-all h-auto duration-200 ease-in-out bg-secondary-300 shadow-lg rounded-xl absolute z-50 left-0
        ${
          show
            ? "opacity-100 top-12 h-20"
            : "opacity-0 top-28 !h-0 overflow-hidden"
        }
        `}>
        <div className='w-3 h-3 absolute -top-1 left-3 rotate-45 bg-secondary-300'></div>
        {children}
      </div>
    </>
  );
};

export default DropDown;
