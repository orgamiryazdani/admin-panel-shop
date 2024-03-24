import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center w-7 pr-3 h-10 rounded-r-2xl justify-center bg-secondary-300 text-secondary-700'>
      <LuSearch />
      </div>
      <input
        type='text'
        name=''
        id=''
        className='w-64 h-10 rounded-l-2xl px-1 bg-secondary-300 text-secondary-500'
        placeholder='جستجو...'
      />
    </div>
  );
};

export default Search;
