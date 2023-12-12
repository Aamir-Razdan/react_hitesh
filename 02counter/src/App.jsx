import { useState } from 'react'



function App() {
  // let counter=5;
  // let [currentvalue,passthe value of change] =useState(value)
  let [counter, setCount] = useState(5)
  const increase= ()=>{
    if(counter<20){
      counter =counter +1
    }
    
    setCount(counter);
  }
  const decrease=function decrease(){
    if(counter>0){
      counter =counter -1
    }
    
    setCount(counter)
  }
  return (
    <>
      <h3>The God is good as dead</h3>
      <h1>{counter}</h1>
      <button onClick={increase}>incr {counter}</button>
      <button onClick={decrease}>decr{counter}</button>
      
    </>
  )
}

export default App
