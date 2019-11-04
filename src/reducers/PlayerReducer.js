import uuid from 'uuid'

export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, {
        name: action.player.name,
        position: action.player.position,
        age: action.player.age,
        id: uuid()
      }]
    case 'REMOVE_PLAYER':
      return state.filter(player => player.id !== action.id)
    default:
      return state
  }
}
