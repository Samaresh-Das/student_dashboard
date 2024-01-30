import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/sheet";

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[250px] dark:bg-gray-800 dark:border-gray-700"
      >
        <SheetHeader>
          <SheetDescription>
            <ul className="flex flex-col p-4 mt-4 font-medium bg-gray-50 rtl:space-x-reverse text-2xl dark:bg-gray-800 dark:border-gray-700">
              <li className="block py-2 px-3 text-white ">
                <a href="/">Home</a>
              </li>
              <li className="block py-2 px-3 text-white ">
                <a href="#">Grades</a>
              </li>
              <li className="block py-2 px-3 text-white ">
                <a href="#">Contact</a>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;