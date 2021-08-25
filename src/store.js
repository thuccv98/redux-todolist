import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import TodoReducer from './reducers/TodoReducers';

const reducer = combineReducers({
  // this containes all reducers
  Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
