import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "Ankur",
    age : 20
  };
  const arr = [1,2,3];
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card userName="chai aur code" btnText="Great Channel"/>
      <Card userName="chai aur code"/>
    </>
  )
}

export default App
