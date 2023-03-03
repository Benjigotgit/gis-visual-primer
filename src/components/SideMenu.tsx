import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

export const SideNavMenu = () => {
  const drawer = useRef(null);
  const [open, setOpen] = useState(true);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);

  const onClose = () => {
    () => setOpen(false);
  };

  const onOpen = () => {
    if (!open) () => setOpen(true);
  };

  return (
    <div
      id="drawer-example"
      className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800"
      onClick={onOpen}
      tabIndex={-1}
      ref={drawer}
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-5 h-5 mr-2"
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
        Gis info {open.toString()}
      </h5>
      <button
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        onClick={onClose}
        className="text-gray-400 relative bg-transparent hover:bg-gray-200 hover:text-gray-900 hover:cursor-crosshair z-50 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          // aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
    </div>
  );
};
function ref(arg0: null) {
  throw new Error("Function not implemented.");
}
