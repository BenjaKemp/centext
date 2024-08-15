import { State, Action, ActionType } from '../types';
import { applyFilters, calculateMinMaxSpend } from '../utils';

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.SET_APPLICATIONS:
            // Calculate minSpend, maxSpend, and midpoint when applications are set
            const { minSpend, maxSpend } = calculateMinMaxSpend(action.payload);
            const midpoint = (minSpend + maxSpend) / 2;

            return {
                ...state,
                applications: action.payload,
                filters: {
                    ...state.filters,
                    minSpend,
                    maxSpend,
                    spend: state.filters.spend === 0 ? midpoint : state.filters.spend, // Default spend to midpoint if it's 0
                },
           
                filteredApplications: applyFilters(action.payload, {
                    ...state.filters,
                    spend: state.filters.spend === 0 ? midpoint : state.filters.spend,
                }),
            };
        case ActionType.SET_SPEND_FILTER:
            return {
                ...state,
                filters: { ...state.filters, spend: action.payload },
                filteredApplications: applyFilters(state.applications, {
                    ...state.filters,
                    spend: action.payload,
                }),
            };
        case ActionType.SET_NAMES_FILTER:
            const newBCAPFilter = state.filters.BCAP === action.payload ? '' : action.payload;
            return {
                ...state,
                filters: { ...state.filters, BCAP: newBCAPFilter },
                filteredApplications: applyFilters(state.applications, {
                    ...state.filters,
                    BCAP: newBCAPFilter,
                }),
            };
        default:
            return state;
    }
};
