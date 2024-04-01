import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Red")
const handelChange=(e)=>{
console.log();
const body =document.querySelector('body')
// console.log(body);
body.style.backgroundColor=`#${Math.random().toString(16).slice(2,8)}`
}


  return (
    <>
      <div>
      <h1>Random BackGround Color Changer</h1>
      <button onClick={handelChange}> Click Me</button>
      </div>
     
    </>
  )
}

export default App
