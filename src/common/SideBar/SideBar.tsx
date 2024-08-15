import React, { useState, ReactNode } from 'react';
import './SideBar.css';
import {Button} from '../Button';

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button className="sidebar-toggle" onClick={toggleSidebar} title="Open sidebar">
        ☰
      </Button>
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <Button className="sidebar-close" onClick={toggleSidebar} title="Close sidebar">
          ✖ 
        </Button>
        <div className="sidebar-children">
          {children}
        </div>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
