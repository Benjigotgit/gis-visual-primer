import { script } from "../script";
import { ScriptTextBlock } from "./ScriptTextBlock";



export const TopicContainer = () => {

  return (
    <ul className="absolute top-0 h-fit pointer-events-none overflow-scroll flex flex-col z-10">
      {script.map((item, index) => (
        <li key={`${index}-${Math.random()}`}>
          <section>
            <div className="z-40 h-[75vh] pointer-events-none" />
            <div className="z-40 pointer-events-auto">
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
