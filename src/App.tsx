import React from 'react';
import './index.css';

import AlertBox from './components/AlertBox';
import UserProfileCard from './components/UserProfileCard';
import ProductDisplay from './components/ProductDisplay';

import type { User, Product } from './types';

const App: React.FC = () => {
  const user: User = {
    id: 'u1',
    name: 'Cheyenne',
    email: 'cj@example.com',
    role: 'Student',
    avatarUrl: 'https://i.pravatar.cc/100',
  };

  const product: Product = {
    id: 'p1',
    name: 'Notebook',
    price: 12.99,
    description: 'A lined notebook for class.',
    imageUrl: 'https://via.placeholder.com/150',
    inStock: true,
  };

  return (
    <div className="p-8 space-y-6">
      <AlertBox type="info" message="This is an info alert!" />
      <UserProfileCard user={user} showEmail showRole />
      <ProductDisplay product={product} showDescription showStockStatus />
    </div>
  );
};

export default App;
