import React from 'react'


class Circle extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            cx: this.props.cx, 
            cy: this.props.cy,
            r: this.props.r,
            color: this.props.color
          }
      }

      makeDrop = () => {
        this.setState({
          cy: this.state.cy + 5
        })
      }
      
      
     render(){
        return(
          <circle onMouseMove={this.makeDrop} fill={this.state.color} opacity={0.4} cx={this.state.cx} cy={this.state.cy} r={this.state.r}/>
        )
      }
    }



    
    export default Circle
    
    
    
      
     