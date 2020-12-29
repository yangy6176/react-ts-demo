/**
 * @todo redux reducer
 * @author 江南小魏晨
 */
const defaultState = {
  router: [],
  userId: 'admin'
}

export default (state: any = defaultState, action: any) => {
  const newState = JSON.parse(JSON.stringify(state || {}))
  switch (action.type) {
    case 'RouterChange':
      newState.router = action.value
      return newState
    case 'LoginSuccess':
      newState.userId = action.value
      return newState
    default:
      return state
  }
}