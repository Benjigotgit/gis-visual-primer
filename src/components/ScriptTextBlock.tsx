import { memo, Ref, useRef } from "react";
import { appStateSelector } from "../state/app/selectors";
import { useAppSelector } from "../state/hooks";

import type { ScriptObj } from "../types/script";

interface IScriptTextItem {
  item: ScriptObj;
  index: number;
}

export const ScriptTextBlock = memo(({ item, index }: IScriptTextItem) => {
  const ref: Ref<HTMLDivElement> = useRef(null);
  const { currStepObj } = useAppSelector(appStateSelector);

  return (
    <div className="z-40 pointer-events-auto  relative h-fit  ">
      <div className="bg-gradient-to-t from-[#a01ff0bb] to-transparent w-screen h-6 " />

      <div
        ref={ref}
        className="h-fit py-8  flex flex-col   bg-[#a01ff0bb] items-center justify-evenly  w-screen z-10"
      >
        <p className="text-center w-1/2 text-white font-semibold my-10 tracking-[0.3px]">
          {currStepObj ? item.text : ""}
        </p>
      </div>
      <div className="bg-gradient-to-b from-[#A020F0bb] relative to-transparent w-screen h-6" />
    </div>
  );
});
