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
    <div className={`z-40 pointer-events-auto  shadow-lg bg-[#FFFFFF98] `}>
      <div
        ref={ref}
        className="h-fit py-8 bg-opacity-75 flex flex-col items-center justify-evenly bg-[#FFFFFF95] w-screen z-10"
      >
        <p className=" text-center w-1/2 text-[#273B4A] mb-10">
          {currStepObj ? item.text : ""}
        </p>
      </div>
    </div>
  );
});
