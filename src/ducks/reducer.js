
const initialState = {
  user: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOG_USER:
    console.log("REDUCER", Object.assign({}, state, { user: action.payload }))
      return Object.assign({}, state, { user: action.payload })
  }
    return state
}

const LOG_USER = 'LOG_USER'

export function action_getUserID(id) {
  return {
    type: LOG_USER,
    payload: id
  }
}