import React, { useMemo, useState, useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
import { groupApplications } from '../../utils';
import { NavigationTreeNodeComponent } from './NavigationTreeNodeComponent';
import { setNamesFilter } from '../../actions';
import './NavigationTree.css';

const NavigationTree: React.FC = React.memo(() => {
  const { state, dispatch } = useAppContext();
  const [activeNodeName, setActiveNodeName] = useState<string>('');

  const treeData = useMemo(() => groupApplications(state.applications), [state.applications]);

  const handleNameClick = useCallback((name: string) => {
    const filterName = name === activeNodeName ? '' : name;
    dispatch(setNamesFilter(filterName));
    setActiveNodeName(filterName);
  }, [activeNodeName, dispatch]);
  
  return (
    <div className="navigation-tree">
      <h1>Navigation</h1>
      <ul>
        {treeData.map(node => (
          <NavigationTreeNodeComponent 
            key={node.name} 
            node={node} 
            parentKey="" 
            onNameClick={handleNameClick} 
            activeNodeName={activeNodeName} 
          />
        ))}
      </ul>
    </div>
  );
});

export default NavigationTree;
