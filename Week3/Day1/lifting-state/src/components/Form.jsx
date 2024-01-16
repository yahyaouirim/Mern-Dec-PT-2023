import React, { useState } from 'react'

const Form = (props) => {
    const [name,setName] = useState("")
    const [height,setHeight] = useState(0)
    const [color, setColor] = useState("")
    const {addPersonToPeople} = props
    
    
    const createPerson = (e) => {
        e.preventDefault()
        console.log("Clicked")

        const newPerson = {
            name,
            height,
            color
        }
        console.log(newPerson)
        addPersonToPeople(newPerson)
    }




  return (
      <fieldset>
          <legend>Form.jsx</legend>
       name :{JSON.stringify(name)}   <br/>
       height :{JSON.stringify(height)}   <br/>
          color :{JSON.stringify(color)}   
          <form onSubmit={createPerson}>
                <div>
                  name:
                  <input  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                  height:
                <input type='number'value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
              </div>
              <div>
                  color:
                  <input value={color} onChange={(e)=>{setColor(e.target.value)}}/>
              </div>
              <button>Add to the party List 🥳</button>

          </form>
      
      </fieldset>
  )
}

export default Form