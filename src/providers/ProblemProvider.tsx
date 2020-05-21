import React, {createContext, Dispatch, ReactElement, ReactNode, useReducer} from 'react';
import problems from '../storage/data.json';

type Platform = 'leetcode' | 'codility';
type DifficultyLeetCode = 'easy' | 'medium' | 'hard';
type DifficultyCodility = 'painless' | 'respectable'
type Difficulty = DifficultyLeetCode | DifficultyCodility;

export interface Problem {
  platform: string;
  index: string;
  name: string;
  createTime: string;
  updateTime: string;
  practice: number;
  remember: number;
  weight: number;
  difficulty: string;
}

type ActionType = { type: 'addProblem', payload: Problem }
  | { type: 'deleteProblem', payload: string }
  | { type: 'updateProblem', payload: Problem }

interface StateType {
  problems: Array<Problem>;
  dispatch?: Dispatch<ActionType>;
}

const initialState: StateType = {
  problems: problems
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "addProblem":
      if (action.payload && state.problems.find(element => element.index === action.payload.index)) {
        return state;
      }
      return {
        ...state,
        problems: [...state.problems, action.payload]
      }
    case "deleteProblem":
      if (action.payload) {
        const p = state.problems.find(element => element.index === action.payload);
        if (p !== undefined) {
          const index = state.problems.indexOf(p);
          const problemsCopy = [...state.problems];
          problemsCopy.splice(index, 1);
          return {
            ...state,
            problems: problemsCopy
          }
        }
      }
      return state;
    case "updateProblem":
      if (action.payload) {
        const p = state.problems.find(element => element.index === action.payload.index);
        if (p !== undefined) {
          const index = state.problems.indexOf(p);
          const problemsCopy = [...state.problems];
          problemsCopy.splice(index, 1, action.payload);
          return {
            ...state,
            problems: problemsCopy
          }
        }
      }
      return state;
    default:
      return state;
  }
};

export const ProblemsContext = createContext(initialState)

export const ProblemsProvider = ({children} : {children: ReactNode}): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProblemsContext.Provider value={{...state, dispatch}}>
      {children}
    </ProblemsContext.Provider>
  )
}