import React, { useState } from 'react'


function Product({item,data}) {
  const [a,b]=useState(true)
  return (
    <div className='text-white w-full h-96 bg-zinc-500'>
      {item}
    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    <h1>{data.address}</h1>
    <h2 className={a === false ? "text-red-600" : "text-blue-600"}>
    {a === false ? "hello" : "hii"}
    </h2>
    <button className='px-3 py-1 rounded-md bg-green-500 text-black' onClick={()=>{b(!a)}}>Change</button>


    
    </div>
  )
}

export default Product