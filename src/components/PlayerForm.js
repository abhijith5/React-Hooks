import React, { useContext, useState } from 'react'
import { PlayerContext } from '../context/PlayerContext'

function PlayerForm() {

  const { dispatch } = useContext(PlayerContext)

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_PLAYER',
      player: {
        name, position, age
      }
    })

    setName('')
    setPosition('')
    setAge('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="uk-margin">
          <input className="uk-input" type="text" placeholder="Player Name.." value={name} onChange={(e) => setName(e.target.value)} required></input>

        </div>
        <div class="uk-margin">
          <input className="uk-input" type="text" placeholder="Player Position" value={position} onChange={(e) => setPosition(e.target.value)} required></input>

        </div>

        <div class="uk-margin">
          <input className="uk-input" type="text" placeholder="Player Age" value={age} onChange={(e) => setAge(e.target.value)} required></input>

        </div>


        <input className="uk-button uk-button-primary" type="submit" value="Add Player" />
      </form>
    </div>
  )
}

export default PlayerForm
