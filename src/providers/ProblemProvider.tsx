import React, {createContext, Dispatch, ReactElement, ReactNode, useReducer} from 'react';
import {loadState} from "../utils/localStorage";
import {selectProblems, updateWeightsNormCumulated} from "../utils/ebbinghaus";

type Platform = 'leetcode' | 'codility';
type DifficultyLeetCode = 'easy' | 'medium' | 'hard';
type DifficultyCodility = 'painless' | 'respectable'
type Difficulty = DifficultyLeetCode | DifficultyCodility;

export interface Problem {
  platform: number;
  serial: string;
  index: string;
  name: string;
  createTime: number;
  updateTime: number;
  practice: number;
  remember: number;
  weight: number;
  difficulty: number;
  normCumulatedWeight: number;
}

type ActionType = { type: 'addProblem', payload: Problem }
  | { type: 'addProblems', payload: Problem[] }
  | { type: 'addSelectedProblems', payload: Problem[] }
  | { type: 'deleteProblem', payload: string }
  | { type: 'updateProblem', payload: Problem }
  | { type: 'deleteSelectedProblem', payload: string }
  | { type: 'updateWeightsNormCumulated' };

interface StateType {
  selectedProblems: Array<Problem>;
  problems: Array<Problem>;
  dispatch?: Dispatch<ActionType>;
}

export const platform = ["LeetCode", "Codility"];
export const difficulty = ["Easy", "Medium", "Hard", "Painless", "Respectable"];

const problems = loadState();
updateWeightsNormCumulated(problems);
const selectedProblems = selectProblems(problems, 3);

const initialState: StateType = {
  selectedProblems: selectedProblems,
  problems: problems,
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
    case "addProblems":
      if (action.payload) {
        return {
          ...state,
          problems: action.payload
        }
      }
      return state;
    case "addSelectedProblems":
      if (action.payload) {
        return {
          ...state,
          selectedProblems: action.payload
        }
      }
      return state;
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
    case "deleteSelectedProblem":
      if (action.payload) {
        const p = state.selectedProblems.find(e => e.index === action.payload);
        if (p !== undefined) {
          const index = state.selectedProblems.indexOf(p);
          const problemsCopy = [...state.selectedProblems];
          problemsCopy.splice(index, 1);
          return {
            ...state,
            selectedProblems: problemsCopy
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
    case "updateWeightsNormCumulated":
      const problemsCopy = [...state.problems];
      updateWeightsNormCumulated(problemsCopy);
      return {
        ...state,
        problems: problemsCopy
      }
    default:
      return state;
  }
};

export const ProblemsContext = createContext(initialState)

export const ProblemsProvider = ({children}: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProblemsContext.Provider value={{...state, dispatch}}>
      {children}
    </ProblemsContext.Provider>
  )
}