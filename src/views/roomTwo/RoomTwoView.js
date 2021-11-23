import './RoomTwo.css';
import { useHistory } from 'react-router';


export const RoomTwoView = () => {
    const history = useHistory();
    return (
        <div>
            <div class="message">
            <h1>Welcome to RoomTwo</h1>
            <h4>Go ahead and look for the path to room three...</h4>
            </div>
            <div class="bg-img">
                <button class="hiddenButton" onClick={() => history.push('/RoomThreeView')}>Take me to room three</button>
            </div>
        </div>
    )
}



