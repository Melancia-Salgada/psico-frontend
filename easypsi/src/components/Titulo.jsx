import React from 'react'

const Titulo = (props) => {
  return (
    <div>
        <div className='ml-10 mt-20'>
            <span className='text-preto-whitemode text-5xl'>{props.children}</span>
        </div>
    </div>
  )
}

export default Titulo