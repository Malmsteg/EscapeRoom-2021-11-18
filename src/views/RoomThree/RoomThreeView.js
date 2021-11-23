import React from 'react';
import { useHistory } from 'react-router';
import './RoomThree.css';
import roomThree from '../../img/roomThree.jpg'
export const RoomThreeView = () => {
  const history = useHistory();
  return (
    <div class='room_container'>
      <div class='clue'>
        <h1>Det Tredje Rummet</h1>
        <hr />
        <h2>Kan du inte se mig, så kanske du behöver mig</h2>
        <p>Sista rummet, kom igen nu!</p>
      </div>
        <button id='room_three_hidden_link' onClick={() => history.push('/')} />
        <img id='room_three_img' src={roomThree} alt='The third escape room'></img> 
    </div>
  );
};