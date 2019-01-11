import { FETCH_MOVIE, FETCH_SHORT } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return [action.payload.data];
    case FETCH_SHORT:
      return [action.payload.data];
    default:
      return state
  }
}