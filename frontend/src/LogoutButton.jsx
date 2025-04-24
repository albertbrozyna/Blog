import React from 'react';

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      style={{
        padding: '5px 10px',
        background: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Wyloguj
    </button>
  );
};

export default LogoutButton;