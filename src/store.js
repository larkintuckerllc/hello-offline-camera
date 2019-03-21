import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import dirty from './ducks/dirty';
import notification from './ducks/notification';
import online from './ducks/online';

const rootReducer = combineReducers({
  dirty,
  notification,
  online,
});

export default createStore(rootReducer, applyMiddleware(reduxThunk));
