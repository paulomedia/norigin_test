import React from 'react'
import { getPosition } from '../../commons/helpers'
import Days from '../../components/days'
import Hours from '../../components/hours'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='days'>
        <Days />
      </div>
      <div style={ getPosition() } className='hours'>
        <Hours />
      </div>
    </header>
  )
}

export default Header