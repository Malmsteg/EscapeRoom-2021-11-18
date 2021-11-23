import React from 'react';
import { useHistory } from 'react-router';
import './RoomThree.css';

export const RoomThreeView = () => {
  const history = useHistory();
  return (
    <div class='room_container'>
      <div class='clue'>
        <h1>Det Tredje Rummet</h1>
        <hr />
        <h2></h2>
        <p>Kan du hitta svaret?.</p>
      </div>
      <button id='room_one_hidden_link' onClick={() => history.push('/')} />
      <img id='room_one_img' src={roomOne} alt='The first escape room'></img>
    </div>
  );
};