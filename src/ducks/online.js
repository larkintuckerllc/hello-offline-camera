// ACTIONS
const ONLINE_ON = 'ONLINE_ON';
const ONLINE_OFF = 'ONLINE_OFF';
export const onlineOn = () => ({
  type: ONLINE_ON,
});
export const onlineOff = () => ({
  type: ONLINE_OFF,
});

// STATE
const initialState = false;

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case ONLINE_ON:
      return true;
    case ONLINE_OFF:
      return false;
    default:
      return state;
  }
};

// SELECTORS
export const onlineGet = state => {
  return state.online;
};
