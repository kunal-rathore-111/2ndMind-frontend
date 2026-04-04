import BackToHomeButton from "./Buttons/BackToHomeButton";
import MoveUpButton from "./Buttons/MoveUpButton";

export default function BackToHome_MoveUpComp() {
  return (
    <div className="flex w-full items-center justify-between">
      <BackToHomeButton />
      <MoveUpButton />
    </div>
  );
}
