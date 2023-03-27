import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
}

// First param: current state obj default value
// Second param: action is what we pass into the dispatch function
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { currentUser: payload }
    default:
      return state;
  }
} 

// No access to the useReducer hook (since we do not pass a action to a specific reducer)
// In redux all reducers receives every action that gets dispatched

// thats why we default return state when types do not match the reducer
// because in React everthing is referenced by memory, hence reducer does not need to update
// input state = output state