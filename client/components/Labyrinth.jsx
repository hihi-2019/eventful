import React from 'react'
import Pixel from "./Pixel"
import { Link } from 'react-router-dom'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Labyrinth extends React.Component {
  constructor(props){
    super(props)
    this.state={
      tail:[]
    }
  }

  handleMouseOver = (id) => {
    if(this.state.tail.length >100){
      this.state.tail.shift()
    }
    this.setState({
      tail : [...this.state.tail, id]
    })
  }

  render(){
    document.documentElement.requestFullscreen()
    return(
      <>
      <Link className="homelink" to='/'>Home</Link>
      {Array.from({length: 2000},
      (v,i) =>{ 
        let color
        if(this.state.tail.includes(i)){
          color = 'blue'
        }
        else {color = 'grey'}
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
