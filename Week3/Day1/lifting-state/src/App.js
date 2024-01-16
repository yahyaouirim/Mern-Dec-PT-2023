import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {


  const [people, setPeople] = useState([
    {
      name: "Mario",
      height: 7,
      color: "red"
    },
    {
      name: "Luigi",
      height: 8,
      color: "green"
    },
    {
      name: "Princess Peach",
      height: "6",
      color: "pink"
    }
  ])

  // function to add to state
  const addPersonToPeople = (onePerson) => {
    console.log("Hello from App.js")
    setPeople([...people, onePerson])

  }


  return (
    <div className="App">
      <fieldset className="App">
        <legend>App.js</legend>
        <h1>Lifting State 🏋️‍♂️</h1>
        {JSON.stringify(people)}

        <Form addPersonToPeople={addPersonToPeople} />

        <Display people={people} />

      </fieldset>
    </div>
  );
}

export default App;
