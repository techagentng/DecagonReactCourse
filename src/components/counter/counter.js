import { useState } from "react"
import "./counter.css"

export default function Counter(){
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount((count)=> count +1)
    //     })
    // }, [])

    function increament(){
       setCount(count + 1)
    }

    function decreament(){
        count <= 0 ? setCount(0) : setCount(count-1)
        if (count <= 0){
            setCount(0)
        } else {
            setCount(count-1)
        }
     }

     function reset(){
        setCount(0)
     }
    return (
        <>
            <div className="counttCont">
                <h1>{count}</h1>
                <div className="countBtn">
                    <button onClick={decreament}>decrease</button>
                    <button onClick={reset}>reset</button>
                    <button onClick={increament}>increase</button>
                </div>
            </div>
        </>
    )
}