import React from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Circle from './Circle'
import { Link } from 'react-router-dom'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`



class Gravity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circles: []
    }
  }

  handleKeyStroke = () => {
    this.setState({
      circles: [...this.state.circles, {
        cx: (Math.random() * window.screen.width),
        cy: 20,
        r: (Math.random() * 200) + 100
      }]
    })
  }


  render() {
    return (
      <>
        <Link className="homelink" to='/'>Home</Link>
        <KeyboardEventHandler
          handleKeys={['a']}
          onKeyEvent={(key, evt) => this.handleKeyStroke()} />
          <svg width={window.screen.width} height={window.screen.height}>
            {this.state.circles.map((circle, i) => {
                return (
                  <Circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} color={randomHexColor()} />
                )
              })
            }
          </svg>
      </>
    )
  }
}


export default Gravity