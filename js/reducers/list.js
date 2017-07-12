import _ from 'lodash';
import type { Action } from "../actions/types";
import { SET_INDEX, SET_LIST, APPROVE, DISAPPROVE } from "../actions/list";

export type State = {
  list: string,
  name: string,
};

const initialState = {
  listName: 'Puppy',
  list: [],
  approved: [],
  disapproved: [],
  selectedIndex: undefined
};

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case SET_INDEX:
      return {
        ...state,
        selectedIndex: action.payload
      };
    case SET_LIST:
      return {
        ...state,
        list: action.payload
      };
    case APPROVE:
      return {
        ...state,
        list: _.filter(state.list, x => x.id != action.payload),
        approved: _.uniq(_.concat(state.approved, action.payload)),
        disapproved: _.filter(state.disapproved, x => x != action.payload),
      };
    case DISAPPROVE:
      return {
        ...state,
        list: _.filter(state.list, x => x.id != action.payload),
        approved: _.filter(state.approved, x => x != action.payload),
        disapproved: _.uniq(_.concat(state.disapproved, action.payload)),
      };
  }
  return state;
}
