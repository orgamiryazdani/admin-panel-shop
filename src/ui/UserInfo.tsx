import { useSelector } from "react-redux";
import { RootState } from "../store";

const UserInfo = () => {
  const { menuValue } = useSelector((state: RootState) => state.menuHeader);

  return (
    <>
      {/* profile image */}
      <img
        className='w-12 h-12 object-cover overflow-hidden rounded-xl'
        src='https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'
        alt='user profile image'
      />
      {/* info user */}
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
