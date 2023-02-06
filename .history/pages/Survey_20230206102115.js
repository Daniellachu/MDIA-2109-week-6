import { use, useState } from "react"
import Start from "./Start"
export default function Survey(){

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [IsActiveTwo, setIsActiveTwo] = useState(false);

    const passName = (event) => {
        if(event.key=== "Enter"){
            
        }
    }

    return(
        <div style={{display: isActiveOne ? 'block' : 'none'}}>
            <h1> What is your name?</h1>
            <input
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Enter Name"
                onKeyDown={passName}
                type="text"
            ></input>
        </div>
        // <div style={{display: IsActiveTwo ? 'block' : 'none'}}></div>
    )
}