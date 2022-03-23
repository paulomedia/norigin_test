import { getMinutes, getHours } from 'date-fns'

export const getTime = data => data.slice(11, 16)

export const getDuration = (start, end) => ((end.getTime() - start.getTime())/60000)

export const getPosition = () => {
  const actualHour = getHours(new Date())
  const actualMinute = getMinutes(new Date())
  const offSet = 366
  const offSetHalf = 670
  const minutesInHour = 60
  
  return {
    marginLeft: `${(-actualHour*offSet - (offSet*(actualMinute/minutesInHour)))+offSetHalf}px`
  }
}

export const getColor = day => {
  return {
    color: new Date().getDate().toString() === day.substr(day.length-2) ? 'white' : ''
  }
}