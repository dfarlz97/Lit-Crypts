// import { Card } from "semantic-ui-react";
import Card from "./Card";
import KeyCard from "./KeyCard";
import StopWatch from "./StopWatch/StopWatch.jsx";
function Game(){
    let sentence = 'food is the greatest thing known to man kind'
    sentence = sentence.split('')

    let keys = [...new Set(sentence)];
    
    return(
        <div className="Game">
            <div className = "Game-Display">
                
                {sentence.map((character) => {
                    return <Card character = {character}/>
                })}
            </div>
            <div className = "Game-Keys">
                <form className="Game-Form">
                    {keys.map((character) => {
                        return <KeyCard character = {character}/>
                    })}
                    <button>Submit</button>
                    <aside className ="timerStyle">
                        <StopWatch />
                    </aside>
                </form>
            </div>
        </div>
    )
}

export default Game