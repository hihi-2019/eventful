import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Gravity from './Gravity'
import Labyrinth from './Labyrinth'
import Home from './Home'
import Pop from './Pop'
import Spinner from './Spinner'



class App extends React.Component {
  render(){
    document.documentElement.requestFullscreen()
    return(
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/gravity' component={Gravity}/>
        <Route path='/labyrinth' component={Labyrinth}/>
        <Route path='/pop' component={Pop}/>
        <Route path='/spinner' component={Spinner}/>
      </Router>
    )
  } 
}

export default App
