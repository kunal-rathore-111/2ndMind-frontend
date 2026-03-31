import { HomeIcon } from "lucide-react";
import { ButtonsClass } from "./SharedClass";
import { useNavigate } from "react-router";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <HomeIcon
      className={ButtonsClass}
      size={29}
      onClick={() => navigate("/")}
    ></HomeIcon>
  );
}
