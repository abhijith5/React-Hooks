import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const PlayerDetails = ({ player }) => {
  console.log(player)

  const { dispatch } = useContext(PlayerContext)

  return (
    <div>
      <li className="" style={{ borderRadius: "20px" }} onClick={() => dispatch({ type: 'REMOVE_PLAYER', id: player.id })}>
        <div className=""><span className="uk-text-bold">Name  :</span>{player.name}</div>
        <div className=""><span className="uk-text-bold">Positoin :</span> {player.position}</div>
        <div className=""><span className="uk-text-bold">Age  :</span>{player.age}</div>
      </li>
    </div>
  )
}

export default PlayerDetails
