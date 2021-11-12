import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';

export default function AccountPlaceholders() {
  const user = useAppSelector(selectUser);

  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
    >
      {!user.personal && (
        <div style={{
          border: 'dashed',
          float: 'right',
          padding: '20px',
          textAlign: 'center',
          width: '200',
        }}
        >
          PLACEHOLDER: Option to sign up for a personal account
        </div>
      )}
      {!user.business && (
        <div style={{
          border: 'dashed',
          float: 'right',
          padding: '20px',
          textAlign: 'center',
          width: '200',
        }}
        >
          PLACEHOLDER: Option to sign up for a business account
        </div>
      )}
    </div>
  );
}
