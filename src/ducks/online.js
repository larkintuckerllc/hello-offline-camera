import { NetInfo } from 'react-native';
import { combineReducers } from 'redux';
import { notificationOff, notificationOn } from './notification';

// SELECTORS
export const onlineGet = state => {
  return state.online.value;
};
export const onlineGetRequested = state => {
  return state.online.requested;
};

// ACTIONS
const ONLINE_ON = 'ONLINE_ON';
const ONLINE_OFF = 'ONLINE_OFF';
const ONLINE_FETCH_REQUEST = 'HELLO_FETCH_REQUEST';
const ONLINE_FETCH_RESPONSE = 'HELLO_FETCH_RESPONSE';

// ACTION CREATORS
const onlineOn = () => ({
  type: ONLINE_ON,
});
const onlineOff = () => ({
  type: ONLINE_OFF,
});
const onlineFetchRequest = () => ({
  type: ONLINE_FETCH_REQUEST,
});
const onlineFetchResponse = payload => ({
  payload,
  type: ONLINE_FETCH_RESPONSE,
});
export const onlineFetch = () => async dispatch => {
  dispatch(onlineFetchRequest());
  const { type } = await NetInfo.getConnectionInfo();
  const online = type !== 'none';
  dispatch(onlineFetchResponse(online));
};
export const onlineSubscribe = () => (dispatch, getState) => {
  const handleConnectionChange = ({ type }) => {
    if (type === 'none') {
      dispatch(notificationOff());
      dispatch(onlineOff());
      return;
    }
    const state = getState();
    const online = onlineGet(state);
    if (!online) {
      dispatch(notificationOn());
    }
    dispatch(onlineOn());
  };
  NetInfo.addEventListener('connectionChange', handleConnectionChange);
};

// STATE
const initialState = {
  requested: true,
  value: false,
};

// REDUCER
const requested = (state = initialState.requested, action) => {
  switch (action.type) {
    case ONLINE_FETCH_REQUEST:
      return true;
    case ONLINE_FETCH_RESPONSE:
      return false;
    default:
      return state;
  }
};
const value = (state = initialState.value, action) => {
  switch (action.type) {
    case ONLINE_ON:
      return true;
    case ONLINE_OFF:
      return false;
    case ONLINE_FETCH_RESPONSE:
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({
  requested,
  value,
});


