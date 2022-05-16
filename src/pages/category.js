import { useState } from "react"
import Card from "../components/menuCard/card/card"
import BlueComp from "../components/menuCard/colors/color"
export default function Category(){
    const [id, setId] =  useState(0)
    function renderComponent(){
        if (id === 0) {
            return null
        } else if (id > 0 && id < 3) {
            return <BlueComp text="text1" />
        } else if (id === 3) {
            return <BlueComp text="text3"/>
        } 

    }
    return(
        <>
            <Card setId={setId}/>
            {renderComponent()}
        </>
    )
}