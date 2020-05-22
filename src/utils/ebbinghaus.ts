export const getWeight = (tc: Date, t0: Date, practice: number, remember: number): number => {
  const dt = (tc.getTime() - t0.getTime()) / 3600000;
  return 1 - Math.exp(- dt / (practice + remember));
};