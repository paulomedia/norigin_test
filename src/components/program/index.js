import React, { useContext } from 'react'
import { ChannelsContext } from '../../context/context'
import Schedule from "../schedule"
import './program.css'

const Program = () => {
  const { channels } = useContext(ChannelsContext)

  return (
    <>
      <div className='programs'>
        {
          channels.map(channel => {
            return (
              <div className='program' key={ channel.id } >
                <Schedule schedules={ channel.schedules } />
              </div>
            )
          })        
        }
      </div>
    </>
  )
}

export default Program