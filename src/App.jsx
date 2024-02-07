import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './Faq.jsx'
import Data from './Data.jsx'
import BackgroundImg from "../src/assets/background-pattern-desktop.svg"

function App() {

  return (
    <>
      <div>
        <img className="background-img"  src={BackgroundImg}/>
        <Faq/>
      </div>
     
    </>
  )
}

export default App
