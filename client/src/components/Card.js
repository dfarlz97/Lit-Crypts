// import { Card } from "semantic-ui-react";

export default function CryptedCard({character}){
    console.log(character)

    return(
        <div className="card">
            <h1>{character.toUpperCase()}</h1>
        </div>
    )
}