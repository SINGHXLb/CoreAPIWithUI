import React from 'react';
import { useEffect, useState } from "react";

//Demonstration of forms submission with possible
//WeakRefwerer

const FormA = () => {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

   
    return (
        <div> Form A

            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p> 

        </div>
    );

  

}

export default FormA;