import { State } from '../types';

export const initialState: State = {
    applications: [],
    filteredApplications: [],
    treeData:[],
    filters: {
        spend: 0,
        BCAP: '',
        minSpend: 0,
        maxSpend: 0
    },
};
