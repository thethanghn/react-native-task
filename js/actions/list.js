
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const SET_LIST = 'SET_LIST';
export const APPROVE = 'APPROVE';
export const DISAPPROVE = 'DISAPPROVE';

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

export function approve(id):Action {
  return {
    type: APPROVE,
    payload: id
  }
}

export function disapprove(id):Action {
  return {
    type: DISAPPROVE,
    payload: id
  }
}
