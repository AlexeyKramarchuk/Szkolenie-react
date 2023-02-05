import React, { useState, useEffect } from "react";


/*function Przyklad() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);


  return (
    <div>
      <p>Nacisnieto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>Nacisnij mnie</button>
      <p>Nacisnieto {count2} razy</p>
    <button onClick={() => setCount2(count2 + 1)}>Nacisnij mnie</button>
    </div>
  );
}*/


function Przyklad() {
  
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(1)
            console.log("Po sekundzie")
        }, 1000);
    }, [])
    /*useEffect(() => {
        const subscription = source.subscribe();
        return () => {
          subscription.unsubscribe();
        };
      }, [source]);*/


    return (
    <div>
      <p>Licznik ma wartość {count} razy</p>
    </div>
  );
}



export default Przyklad;