import React from 'react'
import Pixel from "./Pixel"

class Labyrinth extends React.Component {
  constructor(props){
    super(props)
    this.state={
      tail:[]
    }
  }

  handleMouseOver = (id) => {
    if(this.state.tail.length >20){
      this.state.tail.shift()
    }
    this.setState({
      tail : [...this.state.tail, id]
    })
  }

  render(){
    return(
      <>
      {Array.from({length: 2000},
      (v,i) =>{ 
        let color
        if(this.state.tail.includes(i)){
          color = 'black'
        }
        else {color = 'green'}
        return(
        <Pixel 
        width={window.screen.width}
        height={window.screen.height}
        color={color}
        mouseOver={this.handleMouseOver} 
        id={i}
        key={i + color}/>)
       })
      }
      </>
    )
  }
}

export default Labyrinth
