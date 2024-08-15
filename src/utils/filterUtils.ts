import { ApplicationType } from '../types';

interface Filters {
    spend?: number;
    BCAP?: string;
}

export const applyFilters = (applications: ApplicationType[], filters: Filters): ApplicationType[] => {
    return applications.filter(app => {
        // Check if the spend filter is applied and matches
        if (filters.spend !== undefined && app.spend > filters.spend) {
            return false;
        }

        // Check if the BCAP filter is applied and matches
        if (filters.BCAP && filters.BCAP !== "" && ![app.BCAP1, app.BCAP2, app.BCAP3].includes(filters.BCAP)) {
            return false;
        }

        return true;
    });
};
