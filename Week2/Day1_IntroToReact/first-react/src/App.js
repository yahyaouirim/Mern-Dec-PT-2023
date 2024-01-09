
import './App.css';
import AnotherComponents from './components/AnotherComponents';
import Person from './components/Person';

function App() {
  console.log("hello")

  const x = 3;
  const message = "Hello"
  const animals = ['🦁', '🦒', '🦓', '🐊'];
  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  };


  return (
    <>
      <fieldset className="App">
        <legend>App.js</legend>
        <h1> {message} React {x}</h1>
        <ol>

        </ol>

      </fieldset>
      <Person personOBJ={person} />
      {/* <AnotherComponents number={9}  />
      <AnotherComponents number={5} /> */}
      <AnotherComponents number={7} name={"John"} animals={animals} />

      {/* <AnotherComponents />
      <AnotherComponents />

      <AnotherComponents /> */}
    </>
  );
}

export default App;
