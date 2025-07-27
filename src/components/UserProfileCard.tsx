import React from 'react';
import type { UserProfileCardProps } from '../types';

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}): React.ReactElement => {
  return React.createElement(
    'div',
    { className: 'p-4 border rounded shadow-md text-center' },
    user.avatarUrl &&
      React.createElement('img', {
        src: user.avatarUrl,
        alt: `${user.name}'s avatar`,
        className: 'w-24 h-24 rounded-full mx-auto mb-4',
      }),
    React.createElement('h2', { className: 'text-xl font-bold' }, user.name),
    showEmail && React.createElement('p', null, user.email),
    showRole &&
      React.createElement('p', { className: 'italic text-gray-600' }, user.role),
    onEdit &&
      React.createElement(
        'button',
        {
          onClick: () => onEdit(user.id),
          className: 'mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
          'aria-label': `Edit profile of ${user.name}`,
        },
        'Edit'
      ),
    children
  );
};

export default UserProfileCard;
