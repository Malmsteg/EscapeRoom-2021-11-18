import './RoomTwo.css';
import { useHistory } from 'react-router';


export const RoomTwoView = () => {
    const history = useHistory();
    return (
        <div>
            <div class="message">
            <h1>Välkommen till rum tre</h1>
            <h4>Ta en tur och kika efter rum tre...</h4>
            </div>
            <div class="bg-img">
                <button class="hiddenButton" onClick={() => history.push('/RoomThree')}>Ta mig till rum tre</button>
            </div>
        </div>
    )
}



