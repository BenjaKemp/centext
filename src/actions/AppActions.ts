import { ApplicationType } from '../types';
import { ActionType, SetApplicationsAction, SetSpendFilterAction, SetNamesFilterAction } from '../types';

export const setApplications = (applications: ApplicationType[]): SetApplicationsAction => ({
    type: ActionType.SET_APPLICATIONS,
    payload: applications,
});

export const setSpendFilter = (spend: number): SetSpendFilterAction => ({
    type: ActionType.SET_SPEND_FILTER,
    payload: spend,
});

export const setNamesFilter = (name: string): SetNamesFilterAction => ({
    type: ActionType.SET_NAMES_FILTER,
    payload: name,
});
