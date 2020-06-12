import React, {createContext, Dispatch, ReactElement, ReactNode, useReducer} from 'react';

export interface LeetCodeChoice {
  id: number;
  title: string;
  titleSlug: string;
  difficulty: number;
}

type ActionType = { type: 'addLeetCodeChoices', payload: LeetCodeChoice[] };

interface StateType {
  leetCodeChoices: Array<LeetCodeChoice>;
  dispatch?: Dispatch<ActionType>;
}

const initialState: StateType = {
  leetCodeChoices: [] as LeetCodeChoice[]
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "addLeetCodeChoices":
      if (action.payload) {
        return {
          ...state,
          leetCodeChoices: action.payload
        }
      }
      return state;
    default:
      return state;
  }
};

export const ChoicesContext = createContext(initialState);

export const ChoicesProvider = ({children}: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChoicesContext.Provider value={{...state, dispatch}}>
      {children}
    </ChoicesContext.Provider>
  )
}



