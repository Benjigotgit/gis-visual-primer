import { memo, Ref, useEffect, useRef, useState } from "react";
import { appStateSelector } from "../state/app/selectors";
import { useAppDispatch, useAppSelector } from "../state/hooks";

import type { ScriptObj } from "../types/script";

interface IScriptTextItem {
  item: ScriptObj;
  index: number;
}

export const ScriptTextBlock = memo(({ item, index }: IScriptTextItem) => {
  const ref: Ref<HTMLDivElement> = useRef(null);

  const dispatch = useAppDispatch();
  const { sideNavOpen, currStepIndex, currStepObj } = useAppSelector(appStateSelector);

  const getActiveBlockPosition = (position: DOMRectReadOnly) => {
    console.log("ref", ref.current?.offsetHeight);
    console.log("position height", position.height);
  };

  // useVisible(ref, getActiveBlockPosition);

  return (
    <div className="z-40 pointer-events-auto">
      <div className="bg-gradient-to-t opacity-75 text-center from-blue-500 to-transparent w-screen h-8 " />
      <div
        ref={ref}
        className="h-fit text-center py-8 bg-opacity-75 flex flex-col items-center justify-evenly  bg-blue-500 w-screen z-10"
      >
        
              <p
                // key={`${textIndex}-${Math.random()}`}
                className= "text-center w-1/2 text-white"
              >
                {currStepObj.text}
              </p>
          
      </div>
      <div className="bg-gradient-to-b from-blue-500 opacity-75 to-transparent w-screen h-8" />
    </div>
  );
});
