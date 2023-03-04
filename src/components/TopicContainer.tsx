import { useEffect, useState } from "react";
import { script } from "../script";

export const TopicContainer = () => {
  const [scriptIndex, setScriptIndex] = useState(0);

  useEffect(() => {}, []);

  const dispatchNextItem = (action: any) => {
    console.log("dispatch focus", action);
  };

  return (
    <ul className="absolute top-0 h-fit pointer-events-none overflow-scroll flex flex-col z-10">
      {script.map((item, index) => (
        <>
          <div className="z-40 h-[75vh] pointer-events-none"></div>
          <div key={index} className="z-40 pointer-events-auto">
            <div className="bg-gradient-to-t opacity-75 text-center from-blue-500 to-transparent w-screen h-8 " />
            <div
              className="h-fit text-center py-8 bg-opacity-75 flex flex-col items-center justify-evenly  bg-blue-500 w-screen z-10"
              onFocus={() => dispatchNextItem(item)}
              key={item.name}
            >
              {item.text.length !== 0 &&
                item.text.map((text, i) => {
                  return (
                    <p
                      key={text + i}
                      className={`${
                        i !== item.text.length - 1 ? "mb-10" : ""
                      } "text-center w-1/2`}
                    >
                      {text}
                    </p>
                  );
                })}
            </div>
            <div className="bg-gradient-to-b from-blue-500 opacity-75 to-transparent w-screen h-8" />
          </div>
        </>
      ))}
    </ul>
  );
};
