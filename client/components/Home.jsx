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
        <h1 draggable onDrag={(event) => this.handleDrag(event, 'labyrinth')}>Labyrinth !!</h1>
        <h1 draggable onDrag={(event) => this.handleDrag(event, 'gravity')}>Gravity </h1>
        <h1 onDragOver={(event => this.handleDragOver(event))} onDrop={event => this.handleDrop(event)}>Drop here</h1>
      </>
    )
  }
}
export default Home