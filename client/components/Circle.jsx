import React from 'react'

class Circle extends React.Component {
    constructor(props) {
        super(props)
        this.state={
          circle: {
            cx: "40px", 
            cy: "40px",
            level : 0,
            r: 12
          },

        }
      }
      
     render(){
        return <svg width="80px" height="80px">
          <circle cx={this.state.circle.cx} cy={this.state.circle.cy} r= {this.state.circle.r} />
        </svg>
      }
    }



    
    export default Circle
    
    
    
      
     