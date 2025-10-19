
import { AddIcon, ShareIcon } from "./assets/ButtonIcons";
import { ButtonComp } from "./components/Button";
import { CardComp } from "./components/Card";
import { AddContent } from "./components/AddContent";
const App = () => {
  return (
    <>
      <div className="h-full flex flex-col ">

        <AddContent></AddContent>

        <div className="flex justify-end p-4 gap-6">
          <ButtonComp variant="primary" title="Add Content" startIcon={<AddIcon />} />
          <ButtonComp variant="secondary" title="Share Profile" startIcon={<ShareIcon />} />
        </div>

        <div className="flex   justify-center items-center gap-10">
          <CardComp title={"Remote job"} type="youtube" link="https://www.youtube.com/watch?v=opP_Ng76t1g&pp=ugUEEgJlbg%3D%3D"></CardComp>
          <CardComp title={"Twitter"} type="twitter" link="https://x.com/nishikant_dubey/status/1972380813175275721"></CardComp>
        </div>
      </div>
    </>
  )
}

export default App;