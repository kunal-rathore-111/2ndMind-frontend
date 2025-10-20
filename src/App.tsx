
import { AddIcon, ShareIcon } from "./assets/ButtonIcons";
import { ButtonComp } from "./components/Button";
import { CardComp } from "./components/Card";
import { AddContent } from "./components/AddContent";
import { SideBar } from "./components/SideBar";
import { useState } from "react";

const App = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-full w-full flex flex-row bg-sky-100">
        {/* controlled component (child tells parent to change state) */}
        <AddContent open={open} onClose={() => { setOpen(false) }} />
        <div className={`h-screen w-50 bg-white ${open ? "" : "fixed"}`}><SideBar /></div>

        <div className={`flex-1 ${open ? "" : "ml-50"}`}>
          <div className="flex flex-col">
            <div className="flex justify-end p-4 gap-6">
              <ButtonComp variant="primary" title="Add Content" startIcon={<AddIcon />} onClick={() => { setOpen(true) }} />
              <ButtonComp variant="secondary" title="Share Profile" startIcon={<ShareIcon />} />
            </div>

            <div className="flex justify-center items-center flex-col gap-10 my-8 ">
              <CardComp title={"Remote job"} type="youtube" link="https://www.youtube.com/watch?v=opP_Ng76t1g&pp=ugUEEgJlbg%3D%3D"></CardComp>
              <CardComp title={"Twitter"} type="twitter" link="https://x.com/nishikant_dubey/status/1972380813175275721"></CardComp>
              <CardComp title={"Remote job"} type="youtube" link="https://www.youtube.com/watch?v=opP_Ng76t1g&pp=ugUEEgJlbg%3D%3D"></CardComp>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}


export default App;