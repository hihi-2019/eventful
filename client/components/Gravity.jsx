import React from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Circle from './Circle'

<KeyboardEventHandler
    handleKeys={['a']}
    onKeyEvent={(a, ) => console.log('only handle "a" key')} />



class Gravity extends React.Component {
  render() {
    
    return (
      <div>
        <Circle/>  <Circle />  <Circle />
        keyEvent={this.KeyboardEventHandler}
      </div>
    )


  }
}
export default Gravity