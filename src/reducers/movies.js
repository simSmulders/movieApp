import { FETCH_MOVIE } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return [action.payload.data];
    default:
      return state
  }
}