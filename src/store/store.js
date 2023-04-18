import { createStore } from "redux";

const pagesAuthReducer = (
  state = { isGameAuth: false, isFinalAuth: false },
  action
) => {
  if (action.type === "GAMEAUTH") {
    return { isGameAuth: true };
  }
  if (action.type === "FINALAUTH") {
    return { isFinalAuth: true };
  }
  return state;
};

export const Store = createStore(pagesAuthReducer);
