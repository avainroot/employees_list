import { CREATE_USER, UPDATE_USER } from "data/actionTypes";
import data from "data/employees.json";

export default function(state = data, action: any) {
  switch (action.type) {
    case UPDATE_USER: {
      const updatedState = state.map((e) => {
        if(e.id === action.id){
          return {...e, ...action.values}
        }
        return e
      })
      return updatedState;
    }
    case CREATE_USER: {
      const lastID = Math.max(...state.map((e)=>e.id));
      return [
        ...state, {
          id: lastID+1, ...action.values
        }
      ];
    }
    default:
      return state;
  }
}