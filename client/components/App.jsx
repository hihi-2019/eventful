import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Gravity from './Gravity'
import Labyrinth from './Labyrinth'
import Home from './Home'

class App extends React.Component {
  render(){
    return(
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/gravity' component={Gravity}/>
        <Route path='/labyrinth' component={Labyrinth}/>
      </Router>
    )
  } 
}

export default App
