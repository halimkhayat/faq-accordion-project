import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './Faq.jsx'
import Data from './Data.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img className="background-img" src="../src/assets/background-pattern-desktop.svg"/>
        <Faq/>
      </div>
     
    </>
  )
}

export default App
