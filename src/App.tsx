import React from 'react';
import AlertBox from './components/AlertBox/AlertBox';
import './index.css';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import  UserProfileCard from './components/UserProfileCard/UserProfileCard';

function App() {
  return ( <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">My App </h1>

<AlertBox type="success" message="This is a success alert!" onClose={() => alert('Alert closed!')}>
</AlertBox>
</div> 
);
}

export default App;