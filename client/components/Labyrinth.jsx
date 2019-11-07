import React from 'react'
import Pixel from "./Pixel"

class Labyrinth extends React.Component {
  render(){
    return(
      <>
      {Array.from({length: 9000}, (v,i) => <Pixel key={i}/>)}
      </>
    )
  }
}

export default Labyrinth
