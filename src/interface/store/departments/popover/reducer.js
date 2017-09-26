import { POPOVER_OPEN, POPOVER_CLOSE } from './actions'
import { initialState } from './selectors'

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case POPOVER_OPEN:
      return {
        ...state,
        [payload.id]:true
      }
    case POPOVER_CLOSE:
      return {
        [payload.id]:false
      }
    default:
      return state
  }
}
