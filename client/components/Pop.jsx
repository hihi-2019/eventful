import React from 'react'
import Bubble from './Bubble'

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
    return(
    <svg onClick={this.makeBubble} width={window.screen.width} height={window.screen.height}>
      {this.state.currentCircles.map((circle, i) => {
        return(
        <Bubble key={i} cx={circle.cx} cy={circle.cy} r={circle.r}/>
        )
      })}
  </svg>
    )       
  }
}
export default Pop