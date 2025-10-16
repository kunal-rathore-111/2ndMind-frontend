
import { Button } from './components/ui/button'
import { PlusIcon, ShareIcon } from './assets/icons/buttonIcons'
function App() {

  const addFunction = () => {
    console.log('add function called');
  }
  const shareFunction = () => {
    console.log('share function called');
  }

  return (
    <>
      <div className={`h-screen  w-screen flex justify-center items-center  gap-10`}>
        <Button variant='secondary' size='sm' text='Share' startIcon={<ShareIcon size='md' />} onClick={shareFunction}></Button>
        <Button variant='primary' size='sm' text='Add content' startIcon={<PlusIcon size='md' />} onClick={addFunction}></Button>
        <Button variant='primary' size='lg' text='Add content' startIcon={<PlusIcon size='md' />} onClick={addFunction}></Button>
        <Button variant='secondary' size='sm' text='Add content' startIcon={<PlusIcon size='md' />} onClick={addFunction}></Button>
      </div>
    </>
  )
}

export default App
