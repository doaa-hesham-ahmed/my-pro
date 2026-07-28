import React, { useState } from 'react'
import Parent from '../Parent/Parent';
import Child from '../Child/Child';

export default function Hero() {
    let [counter,setCounter] = useState(5);
    function increment(){
      setCounter(counter++)
    }
    function decrement(){
      setCounter(counter--)
    }

    
  return (
    <>
   <Parent />
    <div className='text-center m-5'>
      
        <h2 className={`p-3 ${counter < 0 ? "bg-danger text-white" : "text-bg-info"}`}>count: {counter}</h2>

        <button className='btn btn-outline-info m-5'onClick={increment} >+</button>
        <button className='btn btn-outline-danger m-5'onClick={decrement} >-</button>
       
       
    </div>
    </>
  )
}
