
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const SET_LIST = 'SET_LIST';

export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}

export function setList(list):Action {
  return {
    type: SET_LIST,
    payload: list,
  }
}
