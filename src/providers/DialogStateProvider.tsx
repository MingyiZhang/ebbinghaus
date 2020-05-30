import React, {createContext, Dispatch, ReactElement, ReactNode, useReducer} from 'react';

type ActionType = { type: 'toggleAddProblem', payload: boolean }
  | { type: 'toggleSortProblems', payload: boolean };

interface StateType {
  addProblemDialogOpen: boolean;
  sortProblemsDialogOpen: boolean;
  dispatch?: Dispatch<ActionType>;
}

const initialState: StateType = {
  addProblemDialogOpen: false,
  sortProblemsDialogOpen: false,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "toggleAddProblem":
      return {
        ...state,
        addProblemDialogOpen: action.payload
      };
    case "toggleSortProblems":
      return {
        ...state,
        sortProblemsDialogOpen: action.payload
      }
    default:
      return state;
  }
};

export const DialogStateContext = createContext(initialState);

export const DialogStateProvider = ({children}: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DialogStateContext.Provider value={{...state, dispatch}}>
      {children}
    </DialogStateContext.Provider>
  )
}