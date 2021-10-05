import React from 'react';

const Button = ({ icon, text, handleAction, buttonAttributes }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center p-2 border border-transparent rounded-full shadow-sm ${buttonAttributes}`}
      onClick={() => handleAction()}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Button;
