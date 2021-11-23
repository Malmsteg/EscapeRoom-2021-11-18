import React from 'react';
import { useHistory } from 'react-router';
import './RoomOne.css';
import roomOne from '../../img/roomOne.jpg';
export const RoomOneView = () => {
  const history = useHistory();
  return (
    <div class='room_container'>
      <div class='clue'>
        <h1>Det Första Rummet</h1>
        <hr />
        <h2>- Vem tar alla i handen?</h2>
        <p>Hitta svaret för att ta dig till nästa klurighet.</p>
      </div>
      <button id='room_one_hidden_link' onClick={() => history.push('/')} />
      <img id='room_one_img' src={roomOne} alt='The first escape room'></img>
    </div>
  );
};
