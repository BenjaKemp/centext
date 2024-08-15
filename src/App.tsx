import React from 'react';
import { AppProvider } from './context';
import AppContent from './AppContent';

const App: React.FC = () => (
    <AppProvider>
        <AppContent />
    </AppProvider>
);

export default App;
