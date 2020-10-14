import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVT00LS_EXTENSION_COMPOSE__ || compose; //add support for redux dev tools.
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
