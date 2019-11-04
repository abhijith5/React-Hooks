import React, { createContext, useState, useReducer } from 'react'
import uuid from 'uuid'
import { playerReducer } from '../reducers/PlayerReducer'

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {
  const [players, dispatch] = useReducer(playerReducer, [])

  return (
    <div>
      <PlayerContext.Provider value={{ players, dispatch }}>
        {props.children}
      </PlayerContext.Provider>
    </div>
  )
}

export default PlayerContextProvider
