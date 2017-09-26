import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { DIALOG_OPEN, DIALOG_CLOSE } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_OPEN:
      return {
        dialogType: action.dialogType,
        dialogProps: action.dialogProps
      }
    case DIALOG_CLOSE:
      return {
        initialState
      }
    default:
      return state
  }
}
