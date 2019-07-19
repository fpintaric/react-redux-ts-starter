import { helloReducer } from '../components/Hello/HelloReducer';

import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  hello: helloReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
