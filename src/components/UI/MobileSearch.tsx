import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { Input } from "@/components/UI/input";
import { useAppDispatch } from "@/store/slices/type";
import { useState } from "react";
import { setFilter } from "@/store/slices/dataSlice";

const MobileSearch = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setFilter(value));
  };
  return (
    <Popover>
      <PopoverTrigger className="">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        {/* <input
          type="text"
          id="search-navbar"
          className="hidden md:block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          //   value={inputValue}
          //   onChange={handleInputChange}
        /> */}
        <Input
          className="dark:bg-gray-700"
          value={inputValue}
          onChange={handleInputChange}
        />
      </PopoverContent>
    </Popover>
  );
};

export default MobileSearch;
