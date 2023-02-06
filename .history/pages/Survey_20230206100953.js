import { use, useState } from "react"
import Start from "./Start"
export default function Survey(){

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [IsActiveTwo, setIsActiveTwo] = useState(false);
    return(
        <div style={{display: isActiveOne ? 'block' : 'none'}}>
            <h1> What is your name?</h1>
            <input
                value={name}
            ></input>
        </div>
        <div>

        </div>
    )
}