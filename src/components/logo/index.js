import React, { useContext } from 'react'
import { ChannelsContext } from '../../context/context'
import './logo.css'

const Logo = () => {
  const { channels } = useContext(ChannelsContext)

  return (
    <ul className='list'>
      {
        channels.map(channel => {
          return (
            <li id={ channel.id } key={ `channel_${ channel.id }` } className='channel' >
              <span className='title'>{ channel.title }</span>
              {/*
                Error loading the real logo url i print the title instead
                Example: https://img.noriginmedia.com/cloudberry/logo_sky1.png
                <img className='logo' src={ channel.images.logo }></img>
              */}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Logo