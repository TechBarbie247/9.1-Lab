import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, showEmail = true, showRole = true, onEdit, children,
}) => {
  return (
    <div className="p-4 border rounded shadow-md max-w-sm text-center">
      <img
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
      {showEmail && <p className="text-gray-600">{user.email}</p>}
      {showRole && <p className="text-gray-500 italic">{user.role}</p>}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Edit
        </button>
      )}
      {children}
    </div>
  );
};

export default UserProfileCard;