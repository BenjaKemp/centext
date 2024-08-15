import { ApplicationType } from '../types';

export const calculateMinMaxSpend = (applications: ApplicationType[]) => {
  if (applications.length === 0) {
    return { minSpend: 0, maxSpend: 0 };
  }
  const spends = applications.map(app => app.spend);
  const minSpend = Math.min(...spends);
  const maxSpend = Math.max(...spends);
  return { minSpend, maxSpend };
};
