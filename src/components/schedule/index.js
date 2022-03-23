import React from "react"
import { getDuration, getTime } from '../../commons/helpers'
import './schedule.css'

const Schedule = ({ schedules }) => {
  return (
    <>
      {
        schedules.map((schedule, i) => {
          return (
            <div 
              style={ {minWidth: `${getDuration(new Date(schedule.start), new Date(schedule.end))*6}px`} } 
              className='schedule' 
              key={ `schedule_${i}` }>
                <div className='title'>
                  <p>{ schedule.title } </p>
                  <span className='span'>{ `${getTime(schedule.start)} - ${getTime(schedule.end)}` }</span>
                </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Schedule