// UserProfile.js
import React from 'react';

const UserProfile = ({ firstName,lastName, email }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent:"center",
      padding: '10px',
      borderRadius: '5px',
      marginRight: '10px',
      marginTop:"20px"
    }}>
      <span style={{ marginRight: '10px' }}>
        <strong>{firstName} {lastName}</strong><br />
        <span>{email}</span>
      </span>
    </div>
  );
};

export default UserProfile;