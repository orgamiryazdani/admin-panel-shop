import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center text-lg w-8 pr-3 h-11 rounded-r-3xl justify-center bg-secondary-300 text-secondary-700'>
        <IoSearch />
      </div>
      <input
        type='text'
        name=''
        id=''
        className='w-72 h-11 rounded-l-3xl px-1 bg-secondary-300 text-secondary-500'
        placeholder='جستجو...'
      />
    </div>
  );
};

export default Search;
