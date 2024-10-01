import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

export const Financeiro = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-32'>
            <Titulo>Financeiro</Titulo>
        </div>
        <WhiteMode/>
    </div>
  )
}
