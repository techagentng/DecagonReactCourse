import {Link} from "react-router-dom"
import "../components/menuCard/card/card.css"
export default function FormPage(){
    return(
        <>
            <div className="cover">
                <div className="contentcont">
                    <h1>Consuming REST React</h1>
                    <Link to="?#"><button>Display Form</button></Link>
                </div>
            </div>
        </>
    )
}