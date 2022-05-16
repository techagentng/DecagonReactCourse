import { useState } from "react"
import "./App.css"
export default function App(){
  const [bg, setBg] = useState(false)
  const [btn, setBtn] = useState(false)

  function handleClick (){
    setBg(!bg)
    setBtn(!btn)
  }
  return(
    <>
        <div className={bg ? `app onBg` : `app offBg`}>
          <a href="?#" className={btn ? `onBtn` : `offBtn`} onClick={handleClick}>Turn On</a>
        </div>
    </>
  )
}