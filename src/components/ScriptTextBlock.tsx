import { memo, Ref, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { script } from "../script";
import type { ScriptObj } from "../types/script";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { appSelector, appStateSelector } from "../state/app/selectors";
import { appSlice } from "../state/app/appState";

interface IScriptTextItem {
  id: string;
  item: ScriptObj;
  index: number;
}

export const ScriptTextBlock = memo(({ item, index, id }: IScriptTextItem) => {
  const ref: Ref<HTMLDivElement> = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: document.querySelector(`#${id}`),
  });

  const { sideNavOpen } = useAppSelector(appStateSelector);

  useEffect(() => {
    if (entry?.isIntersecting) {
      // fires when bottom of text block is hit & isVisible (true when scrolling down, false when scrolling up)
      //TODO: handle function specific to that script item
    }
  }, [entry]);

  return (
    <div
      data-nav-open={sideNavOpen}
      className="z-40 pointer-events-auto group data-[nav-open=true]:translate-x-36 duration-300 data-[nav-open=true]:w-full transition ease-out"
    >
      <div className="bg-gradient-to-t opacity-75 text-center from-blue-500 to-transparent w-screen h-8 " />
      <div className="h-fit text-center py-8 bg-opacity-75 flex flex-col items-center justify-evenly  bg-blue-500 w-screen z-10">
        {item.text.length !== 0 &&
          item.text.map((text, textIndex) => {
            return (
              <p
                key={`${textIndex}-${Math.random()}`}
                className={`${
                  textIndex !== item.text.length - 1 ? "mb-10" : ""
                } "text-center w-1/2`}
              >
                {text}
              </p>
            );
          })}
      </div>
      <div
        ref={ref}
        className="bg-gradient-to-b from-blue-500 opacity-75 to-transparent w-screen h-8"
      />
    </div>
  );
});
