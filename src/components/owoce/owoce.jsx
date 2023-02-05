import React from "react";


const Fruits = () => {

    function handleClick(name) {
        console.log(name)
    }

    return (
        <div>
            <button onClick={() => handleClick("banana")}>banana</button>
            <button onClick={() => handleClick("orange")}>orange</button>
            <button onClick={() => handleClick("ananas")}>ananas</button>
            <button onClick={() => handleClick("kokos")}>kokos</button>
            <button onClick={() => handleClick("apple")}>apple</button>
        </div>
    )
}


  



export default Fruits;