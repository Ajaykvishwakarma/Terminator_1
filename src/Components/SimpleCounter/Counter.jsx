import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = (value) => {

        setCounter(counter + value)
    }


    return (
        <div>
            <div>Counter : {counter} </div>
            <div>
                <button onClick={() => {handleClick(1)}} >Add 1</button>
                <button onClick={() => {handleClick(-1)}} >Remove 1</button>
                <button onClick={() => {handleClick(counter)}} >Double Current Value</button>
                <button onClick={() => {handleClick(-counter)}} >clear</button>
            </div>

        </div>
    )

}