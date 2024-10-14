import React from 'react';
import './formbutton.css'; // This should contain styles applicable to both forms

interface FormButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const FormButton: React.FC<FormButtonProps> = ({ children, type = 'button', className = '' }) => {
  const buttonClass = `form-button ${className}`.trim();
  return (
    <button type={type} className={buttonClass}>
      {children}
    </button>
  );
};

export default FormButton;