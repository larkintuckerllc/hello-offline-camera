// ACTIONS
const DIRTY_ON = 'DIRTY_ON';
const DIRTY_OFF = 'DIRTY_OFF';

// ACTION CREATORS
export const dirtyOn = () => ({
  type: DIRTY_ON,
});
export const dirtyOff = () => ({
  type: DIRTY_OFF,
});

// STATE
const initialState = false;

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case DIRTY_ON:
      return true;
    case DIRTY_OFF:
      return false;
    default:
      return state;
  }
};

// SELECTORS
export const dirtyGet = state => {
  return state.dirty;
};
