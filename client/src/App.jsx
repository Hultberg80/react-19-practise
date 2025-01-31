import Animals from "./Animals.jsx"
import Buttons from "./Buttons.jsx"
import Lists from "./components/Lists.jsx"
import AlertButton from "./AlertButton.jsx"
import Inputfield from "./Inputfield.jsx"
import ThreeButtons from "./ThreeButtons.jsx"
import EventChallenge from "./EventChallenge.jsx"

function App(){

  return(
    <div>
      <Animals />
      <Buttons />
      <Lists />
      <AlertButton />
      <br />
      <br />
      <Inputfield />
      <ThreeButtons />
      <br />
      <EventChallenge />
    </div>
  )
}

export default App