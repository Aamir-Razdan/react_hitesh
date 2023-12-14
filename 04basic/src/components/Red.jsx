// import React from 'react'
import '../index.css'
import { useState } from "react"


export default function Red() {
const [color,setColor]=useState('white');

  return (
    <div className="box" style={{backgroundColor:color}}>
    <div className="buttons">
      <button onClick={()=>setColor('blue')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded">click me</button>
      <button onClick={()=>setColor('red')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-5 rounded">click me</button>
      <button onClick={()=>setColor('orange')} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mr-5 rounded">click me</button>
      <button onClick={()=>setColor('yellow')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mr-5 rounded">click me</button>
      <button onClick={()=>setColor('green')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-5 rounded">click me</button>
    </div>
    </div>
  )
}

