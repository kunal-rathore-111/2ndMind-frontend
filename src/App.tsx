
import { AddIcon, ShareIcon } from "./assets/ButtonIcons";
import { ButtonComp } from "./components/Button";
import { CardComp } from "./components/Card";
const App = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center gap-10">
        <ButtonComp variant="primary" title="Add Content" startIcon={<AddIcon />} />
        <ButtonComp variant="secondary" title="Share Profile" startIcon={<ShareIcon />} />
        <CardComp></CardComp>
      </div>
    </>
  )
}

export default App;