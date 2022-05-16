import { useState } from "react"
import "./card.css"

export default function List({setId}){
    const [active, setActive] = useState(0)
    const data = [
        {
            id: 1,
            text: "Menu 1"
        },
        {
            id: 2,
            text: "Menu 2"
        },
        {
            id: 3,
            text: "Menu 3"
        }
    ]
    function handleClick(id){
        setActive(id)
        setId(id)
        console.log(active)
    }
    return(
        <>
            <div className="dashRapper">
               {data.map((item)=>(
                   <div className={active === item.id ? `box active` : `box`} onClick={()=>handleClick(item.id)}>{item.text}</div>
               ))}
                 
            </div>
        </>
    )
}