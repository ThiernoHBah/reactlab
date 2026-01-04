import { type UserProfileCardProps } from '../../types';

export const UserProfileCard = ({
  user,
  showEmail,
  showRole,
  onEdit,
  children
}: UserProfileCardProps) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <h2>{user.name}</h2>

      {showEmail && <p>{user.email}</p>}
      {showRole && <p>{user.role}</p>}

      {onEdit && (
        <button onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}

      {children}
    </div>
  );
};

