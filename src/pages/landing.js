import {Link} from "react-router-dom"
import "../components/menuCard/card/card.css"
export default function Landing(){
    return(
        <>
            <div className="cover">
                <div className="contentcont">
                    <h1>Welcome to home</h1>
                    <Link to="./card"><button>Enter Dashboard</button></Link>
                </div>
            </div>
        </>
    )
}