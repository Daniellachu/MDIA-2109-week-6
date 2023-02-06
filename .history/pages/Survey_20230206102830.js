import { useState } from "react"
import Start from "./Start"
export default function Survey(){

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [IsActiveTwo, setIsActiveTwo] = useState(false);

    const passName = (event) => {
        if(event.key=== "Enter"){
            console.log("enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }

    return(
        <>
        
            <h1> What is your name?</h1>
            <input
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Enter Name"
                onKeyDown={passName}
                type="text"
            />
        </div>
        <div style={{display: IsActiveTwo ? 'block' : 'none'}}>
            <Start passName={name}/>
        </div>
        </>
        <div style={{display: isActiveOne ? 'block' : 'none'}}>
    )
}