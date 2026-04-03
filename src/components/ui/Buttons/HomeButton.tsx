import { HomeIcon } from "@/assets/icons/Home";
import { ButtonsClass } from "./SharedClass";
import { useNavigate } from "react-router";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <HomeIcon
      className={ButtonsClass}
      size={18}
      onClick={() => navigate("/")}
    ></HomeIcon>
  );
}
