import { LOCAL_STORAGE_PREFIX } from '../Constants';

export function writeToLocalState(key, state) {
  try {
    localStorage.setItem(`${LOCAL_STORAGE_PREFIX}_${key}`, JSON.stringify(state));
  } catch (e) {
    throw e;
  }
}
export function getFromLocalState(key) {
  let state;
  try {
    state = JSON.parse(localStorage.getItem(`${LOCAL_STORAGE_PREFIX}_${key}`));
  } catch (e) {
    throw e;
  }
  return state;
}
export function clearLocalState(key) {
  try {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}_${key}`);
  } catch (e) {
    throw e;
  }
}