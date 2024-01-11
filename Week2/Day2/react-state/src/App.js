
import './App.css';
import { useState } from 'react';

function App() {

  const ninja = {
    name: "Raphael",
    powerLevel: 100
  };

  const [num, setNum] = useState(0)
  //? ----State** Setter of that State 
  const [ninjaObj, setNinjaObj] = useState(ninja)

  const IncrementNumber = () => {
    console.log("Clicked")
    setNum(num + 1)
    console.log(num)
  }
  const ninjaLevelUp = () => {
    setNinjaObj({ ...ninjaObj, powerLevel: ninjaObj.powerLevel + 1 })
  }



  return (
    <fieldset className="App">
      <legend>App.js</legend>
      Our Current State : {num}
      <p></p>
      <button onClick={IncrementNumber}>Increment</button>

      <hr />
      our Current State : {JSON.stringify(ninjaObj)}
      <p></p>
      <p>Ninjas power is {JSON.stringify(ninjaObj.powerLevel)} </p>

      <button onClick={ninjaLevelUp}>Increase the Power level</button>
    </fieldset>
  );
}

export default App;
