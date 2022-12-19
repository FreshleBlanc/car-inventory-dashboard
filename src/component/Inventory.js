import { useState } from "react";

export default function Inventory(props){
    const [count, setCount] = useState (0)
    let name = props.name ?? "Default Counter"

    function increment (incrementor){
      setCount(count + incrementor)
    }
  
    return (
      <div className="App">
        <h1> { name }</h1>
        Count: { count }
        <button onClick={ () => increment(1) }> + 1 Car </button>
        {
          (count > 0) ? 
          // output if condition is met (if)
          <button onClick={ () => increment(-1) }> - 1 Car </button>:
          // output if condition is not met (else)
          <></>
        }
        
      </div>
    );
}