import { BrowserRouter } from "react-router";
import { NavComp } from "./components/Nav";


export default function App() {
  return <div className="min-h-screen min-w-screen flex justify-center items-center flex-col ">
    <BrowserRouter>
      <NavComp></NavComp>
    </BrowserRouter>
  </div>
}