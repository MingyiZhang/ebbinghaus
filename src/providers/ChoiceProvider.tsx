import React, {createContext, Dispatch, ReactElement, ReactNode, useReducer} from 'react';
import data from "../data/leetcode.json";

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

const leetCodeChoices: LeetCodeChoice[] = data["stat_status_pairs"]
  .map(p => ({
    id: p["stat"]["frontend_question_id"],
    title: p["stat"]["question__title"],
    titleSlug: p["stat"]["question__title_slug"],
    difficulty: p["difficulty"]["level"] - 1
  }));

const initialState: StateType = {
  leetCodeChoices: leetCodeChoices
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



