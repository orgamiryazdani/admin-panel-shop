import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Logout = () => {
  const { menuValue } = useSelector((state: RootState) => state.menuHeader);
  return (
    <FiLogOut
      className={`${
        menuValue ? "w-5 h-5" : "w-4 h-4"
      } rotate-180 transition-all duration-200 ease-in-out hover:text-red-500 cursor-pointer`}
    />
  );
};

export default Logout;
