import { ApplicationType } from ".";

export enum ActionType {
    SET_APPLICATIONS = 'SET_APPLICATIONS',
    SET_SPEND_FILTER = 'SET_SPEND_FILTER',
    SET_NAMES_FILTER = 'SET_NAMES_FILTER',
}
export interface SetApplicationsAction {
    type: ActionType.SET_APPLICATIONS;
    payload: ApplicationType[];
}

export interface SetSpendFilterAction {
    type: ActionType.SET_SPEND_FILTER;
    payload: number;
}

export interface SetNamesFilterAction {
    type: ActionType.SET_NAMES_FILTER;
    payload: string;
}

export type Action = SetApplicationsAction | SetSpendFilterAction | SetNamesFilterAction;