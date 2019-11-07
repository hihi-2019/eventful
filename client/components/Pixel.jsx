import React from 'react'

class Pixel extends React.PureComponent {
  
  constructor(props) {
    super(props)
    this.state={
      style: {
        height: Math.sqrt((props.height*props.width)/2000),
        width: Math.sqrt((props.height*props.width)/2000),
        backgroundColor: props.color
      },
      tail: []
    }
  }
  



  
  render(){
    return <div 
      id={this.props.id}
      onMouseOver={()=>this.props.mouseOver(this.props.id)}
      style={this.state.style}> 
      </div>
  }
}

export default Pixel
