import { cn } from "@/lib/utils";
import { ButtonsClass } from "./SharedClass";
import { ArrowBigUpDashIcon } from "@/assets/icons/UpArrow";
import { useRef } from "react";
import {
  animateIconUsingRef,
  type IconHandle,
} from "@/lib/utils/IconAnimateRef";

export default function MoveUpButton() {
  const AnimateRef = useRef<IconHandle>(null);
  return (
    <div
      className={cn(ButtonsClass)}
      {...animateIconUsingRef(AnimateRef)}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <ArrowBigUpDashIcon size={20} ref={AnimateRef} />
    </div>
  );
}
