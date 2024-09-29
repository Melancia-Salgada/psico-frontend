import React from 'react'

const Titulo = (props) => {
  return (
    <div>
        <div className='mt-20'>
            <span className='text-5xl'>{props.children}</span>
        </div>
    </div>
  )
}

export default Titulo