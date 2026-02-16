import React from 'react';
import './actionButton.less';

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, icon, disabled }) => {
  return (
    <button className="actionButton" onClick={onClick} disabled={disabled}>
      {icon && <span className="actionIcon">{icon}</span>}
      <span className="actionLabel">{label}</span>
    </button>
  );
};

export default ActionButton;
