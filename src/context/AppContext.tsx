import React, { createContext, useContext, useReducer, ReactNode, Dispatch, ReactElement, useMemo } from 'react';
import { State, Action } from '../types';
import { reducer } from './reducer';
import { initialState } from './initialState';

interface AppProviderProps {
    children: ReactNode;
}

const AppContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
} | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }): ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { AppProvider, useAppContext };
