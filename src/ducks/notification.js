// ACTIONS
const NOTIFICATION_ON = 'NOTIFICATION_ON';
const NOTIFICATION_OFF = 'NOTIFICATION_OFF';

// ACTION CREATORS
export const notificationOn = () => ({
  type: NOTIFICATION_ON,
});
export const notificationOff = () => ({
  type: NOTIFICATION_OFF,
});

// STATE
const initialState = false;

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_ON:
      return true;
    case NOTIFICATION_OFF:
      return false;
    default:
      return state;
  }
};

// SELECTORS
export const notificationGet = state => {
  return state.notification;
};
