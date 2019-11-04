import React, { Component, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Topbar = () => {
  const { players } = useContext(PlayerContext)
  return (
    <div className="navbar">
      <h1>Players List</h1>
      <p>Currently you have {players.length} books to get through...</p>
    </div>
  )
}

export default Topbar