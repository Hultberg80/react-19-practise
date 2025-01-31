// Utmaning - Bygg en enkel gissningslek där användaren skriver in ett tal
//  i ett inputfält. När användaren trycker på en knapp ska ett meddelande 
// visas som säger om talet är för högt, för lågt eller korrekt 
// (jämfört med ett förutbestämt tal).

import { useState } from "react"

function EventChallenge(){

    const targetNumber = 46;
    const [guess, setGuess] = useState(""); 
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {setGuess(e.target.value)};

    const handleGuess = () => {

    const numberGuess = parseInt(guess, 10) 
        
        if(numberGuess < targetNumber){
            setMessage(`Du gissade på ${guess} vilket var för lågt`);
            alert("Gissa igen");
        }
        else if(numberGuess > targetNumber){
            setMessage(`Du gissade på ${guess} vilket var för högt`);
            alert("Gissa igen");
        }
        else{
            setMessage(`Du gissade på ${guess} det är rätt!`);
            alert("Du vann!");
        }
    };

    return (
        <>
        <input type="number" value={ guess } onChange={handleInputChange} />
        <button onClick={handleGuess}></button>
        <p>{ message }</p>
        </>
    );
}

export default EventChallenge