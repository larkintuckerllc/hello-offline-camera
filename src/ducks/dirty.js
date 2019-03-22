import { FileSystem } from 'expo';

const IMAGE_DIRECTORY = `${FileSystem.documentDirectory}images`;

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
export const dirtyInitialize = () => async dispatch => {
  // CREATE IMAGES DIRECTORY
  const { exists: dirExists } = await FileSystem.getInfoAsync(IMAGE_DIRECTORY, {});
  if (!dirExists) {
    await FileSystem.makeDirectoryAsync(IMAGE_DIRECTORY, {});
  }
  // SET DIRTY
  const names = await FileSystem.readDirectoryAsync(IMAGE_DIRECTORY);
  if (names.length === 0) {
    return;
  }
  dispatch(dirtyOn());
};

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
