import { cn } from "@/lib/utils";
import { ArrowBigLeftDashIcon } from "@/assets/icons/LeftArrow";
import { useRef } from "react";
import {
  animateIconUsingRef,
  type IconHandle,
} from "@/lib/utils/IconAnimateRef";
import { useNavigate } from "react-router";
import { ButtonsClass } from "@/lib/constants/styles";

export default function BackToHomeButton({
  className,
}: {
  className?: string;
}) {
  const navigate = useNavigate();
  const AnimateRef = useRef<IconHandle>(null);
  return (
    <div
      className={cn(
        ButtonsClass,
        "flex cursor-pointer gap-2 px-2 py-1 text-sm",
        className,
      )}
      {...animateIconUsingRef(AnimateRef)}
      onClick={() => {
        navigate("/");
      }}
    >
      <ArrowBigLeftDashIcon size={18} ref={AnimateRef} /> Back to Home
    </div>
  );
}
