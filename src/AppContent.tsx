import React, { useEffect, useState } from 'react';
import { useAppContext } from './context/AppContext';
import { RangeFilter, NavigationTree, ApplicationCard } from './features';
import { CardContainer } from './common';
import { fetchDataService } from './services/fetchDataService';
import { setApplications } from './actions';
import { SideBar } from './common/SideBar';
import './App.css';

const AppContent: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDataService();
            if (data && data.length > 0) {
                dispatch(setApplications(data));
            }
            setLoading(false);
        };
        fetchData();
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (state.applications.length === 0) {
        return null;
    }

    return (
        <div className="app-container">
            <SideBar>
                <NavigationTree />
                <RangeFilter/>
            </SideBar>
            <CardContainer>
                {state.filteredApplications.map((item) => (
                    <ApplicationCard
                        key={item.id}
                        name={item.name}
                        spend={item.spend}
                    />
                ))}
            </CardContainer>
        </div>
    );
};

export default AppContent;
