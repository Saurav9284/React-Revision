import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}} disabled={count===30}>+</button>
      {count}
      <button onClick={()=>{setCount(count-1)}} disabled={count===0}>-</button>
    </div>
  )
}

export default Counter
