import {Problem} from "../providers/ProblemProvider";

export const getWeight = (tc: number, t0: number, practice: number, remember: number): number => {
  const dt = (tc - t0) / 3600000;
  return 1 - Math.exp(- dt / (practice + remember));
};

export const updateWeights = (problems: Problem[]) => {
  problems.forEach(p => {
    const tc = new Date().getTime();
    p.weight = getWeight(tc, p.updateTime, p.practice, p.remember)
  })
};

export const updateNormCumulated = (problems: Problem[]) => {
  let weightSum = 0;
  for (let p of problems) {
    p.normCumulatedWeight = weightSum;
    weightSum += p.weight;
  }
  for (let p of problems) {
    p.normCumulatedWeight /= weightSum;
  }
};

export const updateWeightsNormCumulated = (problems: Problem[]) => {
  updateWeights(problems);
  updateNormCumulated(problems);
};

export const selectProblems = (problems: Problem[], count: number): Problem[] => {
  const selectedProblems: Problem[] = [];
  while (selectedProblems.length < Math.min(count, problems.length)) {
    const r = Math.random();
    const problem = getProblem(problems, r);
    if (selectedProblems.find(p => p.index === problem.index) === undefined) {
      selectedProblems.push(problem);
    }
  }
  return selectedProblems;
}

const getProblem = (problems: Problem[], r: number): Problem => {
  // const index = linearSearch(problems, r);
  const index = binarySearch(problems, 0, problems.length - 1, r);
  return problems[index];
};

// const linearSearch = (problems: Problem[], r: number): number => {
//   for (let i = problems.length - 1; i >= 0; i--) {
//     if (problems[i].normCumulatedWeight <= r) {
//       return i;
//     }
//   }
//   return 0;
// }

const binarySearch = (problems: Problem[], left: number, right: number, r: number): number => {
  while(left < right) {
    const mid = Math.floor(left + (right - left) / 2) + 1;
    if (problems[mid].normCumulatedWeight <= r) {
      left = mid;
    } else if (problems[mid].normCumulatedWeight > r) {
      right = mid - 1;
    }
  }
  return right;
};
