import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openMenuMobile } from "../../features/menu/menuHeaderSlice";

const MenuMobile = () => {
  const { menuMobileValue } = useSelector(
    (state: RootState) => state.menuHeader,
  );
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => dispatch(openMenuMobile())}
        className={`backdrop-blur-sm absolute top-0 left-0 ${
          menuMobileValue ? "w-full" : "w-0"
        } lg:hidden h-screen bg-opacity-0 z-40`}></div>
      <div
        className={`${
          menuMobileValue ? "w-72" : "w-0"
        } z-50 h-screen lg:hidden bg-secondary-100 shadow-2xl transition-all ease-in-out duration-300 absolute`}>

        </div>
    </>
  );
};

export default MenuMobile;