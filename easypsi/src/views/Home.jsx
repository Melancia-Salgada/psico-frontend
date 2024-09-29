import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-24'>
            <Titulo>Home</Titulo>
        </div>
        
    </div>
  )
}

export default Home