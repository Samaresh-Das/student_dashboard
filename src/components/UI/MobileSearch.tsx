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
      <PopoverTrigger>
        <div className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
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
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0">
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
