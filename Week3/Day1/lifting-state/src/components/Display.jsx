import React from 'react'

const Display = (props) => {
  return (
      <fieldset>
          <legend>Display.jsx</legend>
          {/* {JSON.stringify(props.people)} */}

          {
              props.people.map((person, i) => {
                  return <div key={i} style={{ backgroundColor: person.color }}>
                      <h3>{person.name}</h3>
                      <p> height: { person.height}</p>
                      
                  </div>
                  
              })
          }

      
      
      </fieldset>
  )
}

export default Display