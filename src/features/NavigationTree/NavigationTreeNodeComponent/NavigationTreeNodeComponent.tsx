import React, { useState, useCallback } from 'react';
import { TreeNode } from '../../../types';
import './NavigationTreeNodeComponent.css';

interface TreeNodeProps {
  node: TreeNode;
  parentKey: string;
  onNameClick: (name: string) => void;
  activeNodeName?: string;
}

export const NavigationTreeNodeComponent: React.FC<TreeNodeProps> = ({
  node,
  parentKey,
  onNameClick,
  activeNodeName,
}) => {
  const [expanded, setExpanded] = useState(false);
  const key = `${parentKey}-${node.name}`;

  console.log('key', key)

  const toggleExpand = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setExpanded(prevExpanded => !prevExpanded);
  }, []);

  const handleClick = useCallback(() => {
    onNameClick(node.name);
  }, [node.name, onNameClick]);

  return (
    <li className={expanded ? 'expanded' : ''}>
      {node.children.length > 0 && (
        <span className="arrow" onClick={toggleExpand}>
          {expanded ? '▼' : '▶'}
        </span>
      )}
      <span
        className={`node-name ${node.name === activeNodeName ? 'active' : ''}`}
        onClick={handleClick}
      >
        {node.name}
      </span>
      {expanded && node.children.length > 0 && (
        <ul>
          {node.children.map(child => (
            <NavigationTreeNodeComponent
              key={child.name}
              node={child}
              parentKey={key}
              onNameClick={onNameClick}
              activeNodeName={activeNodeName}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavigationTreeNodeComponent;
