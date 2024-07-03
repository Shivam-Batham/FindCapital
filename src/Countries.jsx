import React from 'react'

function Countries({coutries,setCapital}) {
    let arr = [...coutries]
    const handleClick = (c)=>{
        
        // console.log("capital ",c)
        setCapital(()=>c)
    }
  return (
    <div>
      <h1 className='text-center p-2  sm:text-5xl text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500'>All countries</h1>
      <h1 className='text-center  sm:text-3xl text-2xl sm:text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-600'>Click on country name for Finding the Capital</h1>
        <ol>
            {
                arr.map((c,index)=><li className='ml-10' keys={c} onClick={()=>handleClick(c)}>{index +1} . {c.name}</li>)
            }
        </ol>
    
    </div>
  )
}

export default Countries
