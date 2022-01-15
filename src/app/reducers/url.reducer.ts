import { Person } from "../shared/models/person.interface";
import { Action } from "@ngrx/store";

export const SET_URL = 'SET_URL';

export function addPersonUrlReducer(state: string, action) {
  switch (action.type) {
    case SET_URL:
        return action.payload;
    default:
        return state;
    }
}
