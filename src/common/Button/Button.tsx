import React from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, children, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
