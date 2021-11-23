import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomeView.css';
export const HomeView = () => {
  const history = useHistory();
  return (
    <div class='home_container'>
      <div class='home_text'>
        <h1>Escape Room</h1>
        <h2>Grupp 3</h2>
        <button onClick={() => history.push('/roomone')}>
          Starta äventyret
        </button>
      </div>
    </div>
  );
};
