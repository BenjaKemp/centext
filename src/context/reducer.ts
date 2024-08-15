import { State, Action, ActionType } from '../types';
import { applyFilters, calculateMinMaxSpend, groupApplications } from '../utils';

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.SET_APPLICATIONS: {
            const { minSpend, maxSpend } = calculateMinMaxSpend(action.payload);
            const midpoint = (minSpend + maxSpend) / 2;
            const treeData = groupApplications(action.payload);
            const newFilters = {
                ...state.filters,
                minSpend,
                maxSpend,
                spend: midpoint 
            };

            const filteredApplications = applyFilters(action.payload, newFilters);

            return {
                ...state,
                applications: action.payload,
                treeData, 
                filters: newFilters,
                filteredApplications,
            };
        }
        case ActionType.SET_SPEND_FILTER: {
            const newFilters = { ...state.filters, spend: action.payload };
            return {
                ...state,
                filters: newFilters,
                filteredApplications: applyFilters(state.applications, newFilters),
            };
        }
        case ActionType.SET_NAMES_FILTER: {
            const newBCAPFilter = state.filters.BCAP === action.payload ? '' : action.payload;
            const newFilters = { ...state.filters, BCAP: newBCAPFilter };
            return {
                ...state,
                filters: newFilters,
                filteredApplications: applyFilters(state.applications, newFilters),
            };
        }
        default:
            return state;
    }
};
