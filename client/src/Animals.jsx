
function Animals(){

    const ListOfAnimals = ["Hund", "Katt", "Kanin"];

    return(
        <ul>
            {ListOfAnimals.map(animal => (
                <li key={animal}>{ animal }</li>
            ))}
        </ul>
    )

}

export default Animals