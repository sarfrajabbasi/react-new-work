import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
incrementCount = ()=>{
this.setState(prevState =>{
    return {count:prevState.count+1}
})
}
  render() {
    const {count}  = this.state
    return (
        <button className='button-33' onClick={this.incrementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo