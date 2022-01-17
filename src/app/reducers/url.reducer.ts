export const SET_URL = 'SET_URL';

export function addUrlReducer(state: string, action) {
  switch (action.type) {
    case SET_URL:
        return action.payload;
    default:
        return state;
    }
}
