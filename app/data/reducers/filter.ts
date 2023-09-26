import { UPDATE_FILTER } from "data/actionTypes";

const initialFilterState = {
  sort: null,
  role: null,
  isArchive: false
};

export default function(state = initialFilterState, action: any) {
  switch (action.type) {
    case UPDATE_FILTER: {
      return {
        ...state,
        ...action.filter
      };
    }
    default:
      return state;
  }
}