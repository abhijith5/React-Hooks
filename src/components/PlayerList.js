import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import PlayerDetails from './PlayerDetails'
import '../App.css'

const PlayerList = () => {
  const { players } = useContext(PlayerContext)

  return players.length ? (
    <div className="">
      <ul className="uk-list uk-list-striped">
        {players.map(player => {
          return (<PlayerDetails player={player} key={player.id}></PlayerDetails>)
        })}
      </ul>
    </div>
  ) : (
      <div className="">No players in squad</div>
    )
}

export default PlayerList
