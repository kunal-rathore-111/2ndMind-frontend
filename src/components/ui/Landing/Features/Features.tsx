import DotComp from "../Dot";
import { BentoGrid } from "./comps/BentoGrid";

export default function Features() {
  return (
    <>
      <div className="mt-20 flex flex-col text-start">
        <h3 className="flex items-center gap-1 font-semibold text-black/70 uppercase dark:text-white/60">
          {<DotComp />} Features
        </h3>
        <h2 className="text-7xl">Designed for how you actually think</h2>

        {/* bento grid */}
        <BentoGrid />
      </div>
    </>
  );
}
