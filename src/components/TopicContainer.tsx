import { useEffect, useRef } from "react";
import { script } from "../script";
import { ScriptTextBlock } from "./ScriptTextBlock";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { setNextScript, setScriptBlockOffsets } from "../state/app/appState";
import { appStateSelector } from "../state/app/selectors";
import { scrollToScript } from "../utils/scrollToScript";
import { runScriptFuncs } from "../utils/runScriptFuncs";

import type { Marker } from "mapbox-gl";

const getListOffsets = (listItems: HTMLCollectionOf<HTMLLIElement>) => {
  const listItemContainers = document.querySelectorAll(".script-item-container");

  const offsets = [];
  const firstElemHeight = listItemContainers[0].clientHeight;
  for (let i = 0; i < listItems.length - 1; i++) {
    const item = listItems[i];
    const innerItemContainer = listItemContainers[i];

    const distFromBot = innerItemContainer.clientHeight - firstElemHeight;
    offsets.push(item.offsetTop + distFromBot);
  }
  return offsets;
};
const markers: Marker[] = [];

export const TopicContainer = () => {
  const ref = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();

  const { currStepIndex, scriptBlockOffsets, currStepObj, sideNavOpen } =
    useAppSelector(appStateSelector);

  const handleScroll = () => {
    let pause: boolean | undefined;
    return () => {
      if (pause) return;
      pause = true;
      setTimeout(() => {
        const y = window.scrollY;
        const scriptIdx = scriptBlockOffsets.findIndex((offset) => {
          return y < offset;
        });
        if (scriptIdx === -1) return;
        pause = false;
        dispatch(setNextScript(scriptIdx - 1));
      }, 50);
    };
  };

  useEffect(() => {
    if (window.mapRef) {
      runScriptFuncs(window.mapRef, currStepObj, markers);
    }
  }, [currStepIndex]);

  useEffect(() => {
    const listener = window.addEventListener("scroll", handleScroll());
    return () => listener;
  });

  useEffect(() => {
    const children: HTMLCollection | undefined = ref.current?.children;
    if (!children) return;

    if (window.mapRef) {
      dispatch(setNextScript(currStepIndex + 1));
      scrollToScript(scriptBlockOffsets[0], true);
    }

    const offsets = getListOffsets(children as HTMLCollectionOf<HTMLLIElement>);
    dispatch(setScriptBlockOffsets(offsets));
  }, []);

  return (
    <ul
      ref={ref}
      className={`absolute top-0 h-fit pointer-events-none transition duration-300 flex flex-col z-10 ${
        sideNavOpen ? "translate-x-28" : ""
      }`}
    >
      {script.map((item, index) => (
        <li key={`${index}-${Math.random()}`}>
          <section>
            <div className="z-40 h-[75vh] pointer-events-none" />
            <div className="z-40 pointer-events-auto script-item-container">
              <ScriptTextBlock
                key={index + item.name}
                item={item}
                index={index}
              ></ScriptTextBlock>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
};
