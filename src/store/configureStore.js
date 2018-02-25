import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  // Store creation

  const store = createStore(
    // key = root state name (expenses) and value is the reducer (expensesReducer) thats
    // supposed to manage that state
    combineReducers({
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  )

  return store
}
