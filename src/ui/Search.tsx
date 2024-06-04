import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTitle = searchParams.get("title") || "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("title", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div
      className='flex items-center w-full'>
      <div className='flex items-center text-lg w-8 pr-3 h-10 rounded-r-3xl justify-center bg-secondary-300 text-secondary-700'>
        <IoSearch />
      </div>
      <input
        onChange={handleChange}
        type='text'
        value={currentTitle}
        className='w-full h-10 rounded-l-3xl text-black px-1 bg-secondary-300 placeholder:text-secondary-500'
        placeholder='جستجو...'
      />
    </div>
  );
};

export default Search;