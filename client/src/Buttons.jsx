
function Buttons(name, age) {

  const ListOfPeople = [
    { name: "Kevin", age: 37 },
    { name: "Martin", age: 44 },
    { name: "Sebbe", age: 27 }
  ];

  function handleClick(name) {
    alert(`Personens namn är: ${name}`);
  }

  return (
    <>
    <ul>
      {ListOfPeople.map(person => (
        <li key={person.name}>
          {person.name} is {person.age} years old 
          <button onClick={() => handleClick(person.name)}>Click me</button>
        </li>
      ))}
        
      </ul>
      </>
  );
}

export default Buttons