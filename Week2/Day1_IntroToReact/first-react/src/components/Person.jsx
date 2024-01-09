import React from 'react'

const Person = (props) => {
    const {name,favFood,age}= props.personOBJ
  return (
      <div>
          <h3> Person</h3>
          <p>name:{name}</p>
          <p>Favorite Food :{favFood}</p>
          <p>Age:{age}</p>


          
         </div>
  )
}

export default Person