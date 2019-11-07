import React from 'react'

class Pixel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state={
      style: {
        height: 10,
        width: 10,
        backgroundColor: 'green'
      },
      tail: []
    }
  }
  
  handleMouseOver = (event) => {
    // let pix = this.state.tail.shift()
    // let newTail = this.state.tail.push(this.props.id)
    this.setState({
      tail : [...this.state.tail, 'hi']
    }, () => console.log(this.state.tail))
  }


  
  render(){
    return <div id={this.props.id} onMouseOver={this.handleMouseOver} style={this.state.style}></div>
  }
}

export default Pixel
