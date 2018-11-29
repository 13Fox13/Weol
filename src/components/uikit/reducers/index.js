import * as types from '../actions/actionTypes'
import * as actions from '../actions/actions'

const initialState = {
  navColor: '#fff',
  navStyle: {backgroundColor: '#ff585b', color: '#fff', padding: 20},
  userDeets: {
    email: '13-fox@mail.ru'

  }
}

export function bdo(state = initialState, action = {}) {
  switch (action.type) {
  case types.LOGIN:

    return {...state }

  default:
    return state
  }
}
