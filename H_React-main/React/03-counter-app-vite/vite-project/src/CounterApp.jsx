import { PropTypes } from "prop-types";
import { useState } from "react";

export const CounterApp = ({value}) => {
    
const [count, setCount] = useState(value)


    return (
    <>
    <h1>CounterApp</h1>
    <h2>{count}</h2>
    <button onClick={() => setCount(count +1)}>
        +1
        </button>
        <button onClick={() => setCount(count -1)}>-1</button>
        <button onClick={() => setCount(value)}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}