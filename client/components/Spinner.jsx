import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Spinner extends React.Component {
    constructor(props){
        super(props)
        this.state={
            points: "",
            isReady: false,
        }
    }

    makeTriangle = (evt) => {
        if (this.state.points.length < 18){
            this.setState({
                points: this.state.points + " " + evt.clientX + "," + evt.clientY,
                isReady: false
            })
            if(this.state.points.length >12){
                this.setState({
                    isReady:true,
                })
            }

        }
        else{
            this.setState({
                points :''
            })
        }
        
    }

    render() {
        return (
            <svg onClick={this.makeTriangle} width={window.screen.width} height={window.screen.height}>
                {this.state.isReady && <polygon fill={randomHexColor()} points={this.state.points}/>}
            </svg>
          )
    }
}

export default Spinner