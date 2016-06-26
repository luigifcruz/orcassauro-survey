import { createStore } from 'redux'
import reducer from './reducer'

let defaultState = {
  addMark: []
}

export default function configureStore(initialState = defaultState) {
  const store = createStore(reducer, initialState);
  return store;
}
