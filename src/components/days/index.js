import React from 'react'
import { getColor } from '../../commons/helpers'
import { days } from '../../commons/types/days'
import { MONTHS } from '../../commons/types/months'
import './days.css'

const Days = () => {
  return (
    <ul className='list_days'>
      {
        days.map(day => {
          return (
            <li style={ getColor(day) } key={ day }>
              { `${ day }${ MONTHS.MARCH }` }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Days