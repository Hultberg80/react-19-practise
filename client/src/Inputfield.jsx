
//Inputfält - Skapa en komponent med ett inputfält som visar det aktuella värdet i realtid under fältet när användaren skriver.

function Inputfield(){

    function handleChange(e){
        console.log("värde: ", e.target.value)
    }

    return <>
    <input type="text" onChange={handleChange} />
    </>
}

export default Inputfield