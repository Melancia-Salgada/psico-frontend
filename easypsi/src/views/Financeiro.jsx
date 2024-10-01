import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

export const Financeiro = () => {
  return (
    <div>
        <Sidebar/>
        <div className='container-dash'>
            <Titulo>Financeiro</Titulo>
        </div>
        <WhiteMode/>
    </div>
  )
}
