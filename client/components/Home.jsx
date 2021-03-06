import React from 'react'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      draggedTask: '',
      redirect: false,
      fullscreen: false,
    }
  }

  handleDrag = (event, title) => {
    event.preventDefault()
    this.setState({
      draggedTask: title
    })
  }

  handleDrop = (event)=>{
    event.preventDefault()
    this.setState({
      redirect: true
    })
  }

  handleDragOver = (event) => {
    event.preventDefault()
  }

  renderRedirect = () => {
    if (this.state.redirect){
      return <Redirect to={'/'+this.state.draggedTask}/>
    }
  }

  toggleFullScreen = () => {
    document.documentElement.requestFullscreen()
    this.setState({
      fullscreen: true
    })
  }

  render() {
    return (
      <>
      {!this.state.fullscreen && <div className='homelink' onClick={()=> this.toggleFullScreen()}>full screen</div>}
        {this.renderRedirect()}
        <div className="background"> </div>
        <div className="cartridge">
        <div className="img1">
        <img height={120} width={120} src="/images/cartridge.png" draggable onDrag={(event) => this.handleDrag(event, 'labyrinth')}/>
        </div>
        <div className="img2">
        <img height={120} width={120} src="/images/cartridge.png" draggable onDrag={(event) => this.handleDrag(event, 'gravity')}/>
        </div>
        <div className="img3">
        <img height={120} width={120} src="/images/cartridge.png" draggable onDrag={(event) => this.handleDrag(event, 'pop')}/>
        </div>
        <div className="img5">
        <img height={120} width={120} src="/images/cartridge.png" draggable onDrag={(event) => this.handleDrag(event, 'spinner')}/>
        </div>
        </div>
        <div className="gameboy">
        <img className="img4"src="/images/gameboy.png" onDragOver={(event => this.handleDragOver(event))} onDrop={event => this.handleDrop(event)}/>
        </div>
       
      </>
    )
  }
}
export default Home