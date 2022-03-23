import React, { useContext } from 'react'
import { ChannelsContext } from '../../context/context'
import { getPosition } from '../../commons/helpers'
import Logo from '../../components/logo'
import Program from '../../components/program'
import './main.css'

const Main = () => {
  const { channels } = useContext(ChannelsContext)

  return (
    <main className='main'>
      <div className='channels'>
        <Logo channels={ channels } />
      </div>
      <div style={ getPosition() } className='guide'>
        <Program channels={ channels } />
      </div>
    </main>
  )
}
  
export default Main