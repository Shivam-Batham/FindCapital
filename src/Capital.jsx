import React from 'react'

function Capital({capital}) {
    // console.log(capital.length)
  return (
    capital.length==0 ? null : <div >
    <p className='text-center sm:text-4xl text-3xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500 '>
      {capital.name} 's capital is {capital.capital}
    </p>
    </div>
  )
}

export default Capital
