import React from 'react'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      draggedTask: '',
      redirect: false,
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

  render() {
    return (
      <>
        {this.renderRedirect()}
        <div className="cartridge">
        <img height={90} width={90} src="/images/cartridge.png" draggable onDrag={(event) => this.handleDrag(event, 'labyrinth')}/>
        <img height={90} width={90} src="/images/cartridge.png" draggable onDrag={(event) => this.handleDrag(event, 'gravity')}/>
        <img height={90} width={90} src="/images/cartridge.png" draggable onDrag={(event) => this.handleDrag(event, 'pop')}/>
        </div>
        <div className="gameboy">
        <img src="/images/gameboy.png" onDragOver={(event => this.handleDragOver(event))} onDrop={event => this.handleDrop(event)}/>
        </div>
      </>
    )
  }
}
export default Home