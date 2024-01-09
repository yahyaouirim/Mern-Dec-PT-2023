import React from 'react'



const AnotherComponents = (props) => {
    console.log(props)
    const { number, name, animals } =props
  return (
      <fieldset>
          <legend>AnotherComponents.jsx</legend>
          <p> {number} {name}</p>
          {
            animals.map((eachAnimal,idx) => {
              return <li key={idx}>{eachAnimal}</li>
            })
          }
      </fieldset>
  )
}

export default AnotherComponents