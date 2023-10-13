/*prettier-ignore*/ import { Dispatch, SetStateAction } from 'react';
/*prettier-ignore*/ import { ITodoCat, ITodo }          from "@/types/main";

// --------------------------------------------------------------
// Action Type ⮧
// --------------------------------------------------------------
export const ENTITY_READ_REQUEST = "ENTITY_READ_REQUEST";
export const ENTITY_READ_SUCCESS = "ENTITY_READ_SUCCESS";
export const ENTITY_READ_FAILURE = "ENTITY_READ_FAILURE";

// --------------------------------------------------------------
// Api ⮧
// --------------------------------------------------------------
export const readAllEntityApi = () =>
  fetch("http://localhost:4001/todo").then((response) => response.json());

// --------------------------------------------------------------
// Reducer ⮧
// --------------------------------------------------------------
export interface ITodoReducer {
  type: string;
  payload: { id: number; label?: string }[];
}

export const initialTodoReducerState = {
  todoCat: [],
  isLoading: false,
  isError: false,
  error: null
};

/*prettier-ignore*/ export const todoReducer = (
  state = initialTodoReducerState,
  { type, payload }: ITodoReducer
) => {
  switch (type) {
    case ENTITY_READ_REQUEST: return { ...state, ...payload };
    default: return { ...state };
  }
};
