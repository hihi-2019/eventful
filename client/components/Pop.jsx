import React from 'react'
import Bubble from './Bubble'
import { Link } from 'react-router-dom'

class Pop extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentCircles : []
    }
  }

  makeBubble = (evt) => {
    this.setState({
      currentCircles : [
        ...this.state.currentCircles,
        {
          cx:evt.clientX,
          cy:evt.clientY,
          r: 100
        }
      ]
    })
  }

  render(){
    document.documentElement.requestFullscreen()
    return(
      <>
      <Link className="homelink" to='/'>Home</Link>
      <svg onClick={this.makeBubble} width={window.screen.width} height={window.screen.height}>
      {this.state.currentCircles.map((circle, i) => {
        return(
        <Bubble key={i} cx={circle.cx} cy={circle.cy} r={circle.r}/>
        )
      })}
    </svg>
    </>
    )       
  }
}
export default Pop