import { useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { script } from "../script";

export const SideNavMenu = () => {
  const drawer = useRef(null);
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    if (!open) setOpen(true);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition duration-300 ease-out bg-white w-60 dark:bg-gray-800 ${
        !open && "-translate-x-44"
      }`}
      onClick={onOpen}
      tabIndex={0}
      ref={drawer}
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-5 h-5"
          // aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        LOFTY
      </h5>
      <button
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        onClick={onClose}
        className="text-gray-400 relative bg-transparent hover:bg-gray-200 hover:text-gray-900 float-right hover:cursor-pointer z-50 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <MdKeyboardArrowLeft
          size={25}
          className={`transition duration-300 ease-out ${open ? "rotate-180" : ""}`}
        />
      </button>
      <ul className="flex flex-col justify-start w-full items-center">
        {script.map((item, i) => {
          return (
            <li
              key={item.displayName + i}
              className="flex flex-row justify-start items-center w-full h-10 transition hover:bg-slate-400"
            >
              <p className="text-slate-200">
                {i + 1}. {item.displayName}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
