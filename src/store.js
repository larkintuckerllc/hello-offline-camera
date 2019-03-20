import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import notification from './ducks/notification';
import online from './ducks/online';

const rootReducer = combineReducers({
  notification,
  online,
});

export default createStore(rootReducer, applyMiddleware(reduxThunk));
