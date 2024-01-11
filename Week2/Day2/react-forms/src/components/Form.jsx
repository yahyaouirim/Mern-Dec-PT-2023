import React, { useState } from 'react'

const Form = () => {
    // Create state for this Component  / for the input

    const [animal, setAnimal] = useState("")
    const [zoo,setZoo]=useState(["🦁","🐘"])

    const AddAnimalToTheZoo = (e)=>{
        console.log("Clicked")
        e.preventDefault()
        if (zoo.length < 5) {
            setZoo([...zoo,animal])
            
        }
        setAnimal("")

    }

    
  return (
      <fieldset>
          <legend>Form.jsx</legend>
          Animal State : {JSON.stringify(animal)}
          <p></p>
          {JSON.stringify(zoo)}
          <form onSubmit={AddAnimalToTheZoo}>
              <p>
                  enter animal emoji : <input onChange={(e) => { setAnimal(e.target.value) }} value={animal} />
                  {zoo.length >= 5 ? <p style={{backgroundColor:"red"}}> the Zoo is Full</p> : ""}
              </p>
              <input type="submit" value="Add animal to the Zoo" />
          </form>
          <hr />
          {
              zoo.map((elem, idx) => {
                  return <p>{elem}</p>
              })
          }
      
      </fieldset>
  )
}

export default Form