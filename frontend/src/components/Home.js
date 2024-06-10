// src/components/Home.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import NewsThumbnails from './NewsThumbnails'; // This would be another component to handle news thumbnails

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {user ? user.name : 'Guest'}</p>
      <NewsThumbnails />  {}
    </div>
  );
};

export default Home;
