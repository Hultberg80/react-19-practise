
function AlertButton() {
  
  function handleAlertButton() {
    alert('Hej världen!')
  }

  return (
  <>
    <button onClick={handleAlertButton}>Click me!</button>
  </>
)}

export default AlertButton
