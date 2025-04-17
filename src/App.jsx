import React, { useState } from 'react'
import Product from './Product'

function App() {
  let [a,b]=useState(10)
  return (
    // <div className='w-full h-screen bg-zinc-700 p-10'>
    //   <div className='w-44 h-32 rounded-xl bg-red-600'> </div>
    //   <Product/>
    // </div>
    <div className='w-full h-screen bg-zinc-700 text-white'>
      <h1>{a}</h1>
      <button onClick={()=>b(a+1)} className='px-3 py-1 rounded-md bg-green-500 text-black'>Click</button>
      <Product item={a} />

    </div>
  )
}

export default App