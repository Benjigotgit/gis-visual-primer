import { useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { script } from "../script";
import { setSideNavOpen } from "../state/app/appState";
import { appStateSelector } from "../state/app/selectors";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { AppStateActions } from "../types/state";

export const SideNavMenu = () => {
  const drawer = useRef(null);
  const dispatch = useAppDispatch();
  const { sideNavOpen } = useAppSelector(appStateSelector);

  const open = () => {
    dispatch(setSideNavOpen(!sideNavOpen));
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition duration-300 ease-out bg-white w-60 dark:bg-gray-800 ${
        !sideNavOpen && "-translate-x-44"
      }`}
      tabIndex={0}
      ref={drawer}
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        LOFTY
      </h5>
      <button
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        onClick={open}
        className="text-gray-400 relative bg-transparent hover:bg-gray-200 hover:text-gray-900 float-right hover:cursor-pointer z-50 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <MdKeyboardArrowLeft
          size={25}
          className={`transition duration-300 ease-out ${
            sideNavOpen ? "" : "rotate-180"
          }`}
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