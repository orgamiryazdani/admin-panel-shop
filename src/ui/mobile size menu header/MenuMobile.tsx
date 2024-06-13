import { useSelector } from "react-redux";
import { RootState } from "../../store";

const MenuMobile = () => {
  const { menuMobileValue } = useSelector(
    (state: RootState) => state.menuHeader,
  );

  return (
    <div
      className={`${
        menuMobileValue ? "w-72" : "w-0"
      } h-screen lg:hidden bg-secondary-100 shadow-2xl transition-all ease-in-out duration-300 absolute`}>
        
      </div>
  );
};

export default MenuMobile;
