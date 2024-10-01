import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <div className='container-dash'>
            <Titulo>Home</Titulo>
        </div>
        <WhiteMode/>
    </div>
  )
}

export default Home