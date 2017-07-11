import type { Action } from "../actions/types";
import { SET_INDEX, SET_LIST } from "../actions/list";

export type State = {
  list: string,
  name: string,
};

const initialState = {
  listName: 'Puppy',
  list: [],
  selectedIndex: undefined
};

export default function(state: State = initialState, action: Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  } else if (action.type === SET_LIST) {
    return {
      ...state,
      list: action.payload
    };
  }
  return state;
}
