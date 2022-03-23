import React from 'react'
import { hours } from '../../commons/types/hours'
import './hours.css'

const Hours = () => {
  return (
    <div className='list_hours'>
      {
        hours.map(hour => {
          return <div className='hour' key={ hour }>{ hour }</div>
        })
      }
    </div>
  )
}

export default Hours