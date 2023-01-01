import React, { useState } from 'react'

const Counter = () => {
    let [counter , setcounter]=useState(0);

let Increment=()=>{
    setcounter(counter=>counter +1);
}

let Decrement=()=>{
    setcounter(counter=>counter -1);
}

  return (
    <div>
        <button onClick={Increment} data-testid="increment">+</button>
        <h1 data-testid="counter">{counter}</h1>
        <button onClick={Decrement}>-</button>
    </div>
  )
}

export default Counter