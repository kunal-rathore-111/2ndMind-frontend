import HomeButton from "./Buttons/HomeButton";
import ThemeToggleButton from "./Buttons/ThemeButton";

export default function ThemeHomeComp() {
  return (
    <div className="flex w-full items-center justify-between">
      <ThemeToggleButton />
      <HomeButton />
    </div>
  );
}
