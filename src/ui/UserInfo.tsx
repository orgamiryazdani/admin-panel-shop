import { useSelector } from "react-redux";
import { RootState } from "../store";

const UserInfo = () => {
  const { menuValue } = useSelector((state: RootState) => state.menuHeader);

  return (
    <>
      <img
        className='w-12 h-12 object-cover overflow-hidden rounded-xl'
        src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
        alt='user profile image'
      />
      <div
        className={`flex flex-col text-sm text-secondary-600 ${
          menuValue ? "items-end" : "items-center"
        }`}>
        <span>Amir yz</span>
        <span className='text-secondary-400 text-xs'>super admin</span>
      </div>
    </>
  );
};

export default UserInfo;
