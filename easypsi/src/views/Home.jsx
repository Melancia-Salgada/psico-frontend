import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-32'>
            <Titulo>Home</Titulo>
        </div>
        <WhiteMode/>
    </div>
  )
}

export default Home