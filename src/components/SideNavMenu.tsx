import { useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { script } from "../script";
import { setSideNavOpen, setNextScript} from "../state/app/appState";
import { appStateSelector } from "../state/app/selectors";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { AppStateActions } from "../types/state";

export const SideNavMenu = () => {
  const drawer = useRef(null);
  const dispatch = useAppDispatch();
  const { sideNavOpen, currStepIndex } = useAppSelector(appStateSelector);

  const open = () => {
    dispatch(setSideNavOpen(!sideNavOpen));
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition duration-300 ease-out  w-60 bg-white ${
        !sideNavOpen && "-translate-x-44"
      }`}
      tabIndex={0}
      ref={drawer}
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-800 dark:text-gray-400"
      >
        LOFTY
      </h5>
      <button
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        onClick={open}
        className="text-gray-700 relative bg-transparent hover:bg-gray-200 hover:text-gray-900 float-right hover:cursor-pointer z-50 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <p className={`text-slate-600 ${
            currStepIndex === i ? "text-orange-400" : ""
          }`}
          onClick={() => {dispatch(setNextScript(i))}}

          
          >
                {i + 1}. {item.displayName}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
