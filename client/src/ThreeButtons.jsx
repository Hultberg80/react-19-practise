
function ThreeButtons() {
  
  function handleClick(name) {
  alert(`Hej, ${name}`)
}

  return (
  <>
    <button onClick={() => handleClick("Kevin")}></button>,
    <button onClick={() => handleClick("Martin")}></button>,
    <button onClick={() => handleClick("Sebbe")}></button>
  
</>
  )
}



export default ThreeButtons