import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from './components/ui/button'
function App() {

  const addFunction = () => {
    console.log('add function called');
  }

  return (
    <>
      <Button variant='primary' size='sm' text='Add content' startIcon="+" onClick={addFunction}></Button>
    </>
  )
}

export default App
