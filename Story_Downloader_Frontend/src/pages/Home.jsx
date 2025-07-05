import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Story Generator</h1>
      <p>Choose your preferred method:</p>
      <div className="button-group">
        <button onClick={() => navigate('/json')}>Generate from JSON 📂</button>
        <button onClick={() => navigate('/url')}>Generate from URL 🔗</button>
      </div>
    </div>
  );
};

export default Home;
