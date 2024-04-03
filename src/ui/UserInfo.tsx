import { widthProp } from "../types/WidthProp";

const UserInfo = ({ width = 40 }: widthProp) => {
  return (
    <div className={`flex w-${width} items-center justify-around`}>
      <img
        className='w-12 h-12 object-cover overflow-hidden rounded-xl'
        src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
        alt=''
      />
      <div className='flex flex-col text-sm text-secondary-600 items-end'>
        <span>Amir yz</span>
        <span className='text-secondary-400 text-xs'>super admin</span>
      </div>
    </div>
  );
};

export default UserInfo;
