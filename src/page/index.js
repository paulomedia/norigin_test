import React, { useContext, useEffect } from 'react'
import { ChannelsContext } from '../context/context'
import { getChannels } from '../services'
import Header from './header'
import Main from './main'

const Page = () => {
  const { setChannels } = useContext(ChannelsContext)

  useEffect(() => {
    getChannels()
      .then(data => setChannels(data.channels)
      ,error => console.log('Error ocurred: ' ,error))
  }, [])

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default Page