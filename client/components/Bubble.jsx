import React from 'react'
import Sound from 'react-sound'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Bubble extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      r: props.r,
      isDisplayed: true
    }
  }

  makePop = () => {
    if (this.state.r < 300) {
      this.setState({
        r: this.state.r + 7
      })
    }
    else {
      this.setState({
        isDisplayed: false
      })
    }

  }

  render() {
    return (
      this.state.isDisplayed ?
        <circle onMouseMove={this.makePop} fill={randomHexColor()} opacity={0.3} cx={this.props.cx} cy={this.props.cy} r={this.state.r} /> : 
        <Sound
          url='/sounds/popSound.mp3'
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
  }
}
export default Bubble