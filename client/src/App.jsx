import Animals from "./Animals.jsx"
import Buttons from "./Buttons.jsx"
import Lists from "./components/Lists.jsx"
import AlertButton from "./AlertButton.jsx"
import Inputfield from "./Inputfield.jsx"
import ThreeButtons from "./ThreeButtons.jsx"

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
    </div>
  )
}

export default App