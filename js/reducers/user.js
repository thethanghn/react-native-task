
import type { Action } from '../actions/types';
import { SET_USER } from '../actions/user';

export type State = {
    username: string
}

const initialState = {
  username: '',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_USER) {
    return {
      ...state,
      username: action.payload,
    };
  }
  return state;
}
