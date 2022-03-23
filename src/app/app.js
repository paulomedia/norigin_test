import React, { useState } from 'react'
import Page from '../page'
import { ChannelsContext } from '../context/context';
import './app.css'

const App = () => {
  const [channels, setChannels] = useState([]);

  return (
    <div className='app'>
      <ChannelsContext.Provider value={{ channels, setChannels }}>
        <Page />
      </ChannelsContext.Provider>
    </div>
  ) 
}

export default App
