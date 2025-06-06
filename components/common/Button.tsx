import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; 
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
  >
    {label}
  </button>
);

export default Button;
