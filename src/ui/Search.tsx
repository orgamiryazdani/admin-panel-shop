import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTitle = searchParams.get("title") || "";
  const { menuValue } = useSelector((state: RootState) => state.menuHeader);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("title", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div
      className={`flex items-center ${
        menuValue ? "w-56 h-11 text-base" : "w-24 h-20 text-xs"
      }`}>
      <div className='flex items-center text-lg w-8 pr-3 h-full rounded-r-3xl justify-center bg-secondary-300 text-secondary-700'>
        <IoSearch />
      </div>
      <input
        onChange={handleChange}
        type='text'
        value={currentTitle}
        className='w-full h-full rounded-l-3xl text-black px-1 bg-secondary-300 placeholder:text-secondary-500'
        placeholder='جستجو...'
      />
    </div>
  );
};

export default Search;
