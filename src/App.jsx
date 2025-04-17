import React, { useState } from 'react'
import Product from './Product'

function App() {
  let [a,b]=useState(10)
  return (
    
    <div className='w-full h-screen bg-zinc-700 text-white'>
      <h1>{a}</h1>
      <button onClick={()=>b(a+1)} className='px-3 py-1 rounded-md bg-green-500 text-black'>Click</button>
      <Product item={a} data={{name: "Hari",age:23,address:"Kamalpur"}} />

    </div>
  )
}

export default App