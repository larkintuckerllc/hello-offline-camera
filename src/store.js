import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import online from './ducks/online';

const rootReducer = combineReducers({
  online,
});

export default createStore(rootReducer, applyMiddleware(reduxThunk));
