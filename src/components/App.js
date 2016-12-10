import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import Box from './Box'
import DevTools from '../containers/DevTools'

class App extends Component {

  componentDidMount() {
    this.animate()
  }

  animate() {
    let duration    = 1000 // in ms
    let fps         = 60 // frames per second
    let scrollStep  = 1 / ((duration / 1000) * fps)
    let takeStep    = scrollStep
    let idx         = 1

  let animationStep = function() {
    setTimeout(() => {
      if (this.props.animationProgress < 1) {
        idx += 1
        takeStep = scrollStep * idx
        this.props.nextTick(takeStep)
        window.requestAnimationFrame(animationStep.bind(this))
      }
    }, 1000 / fps);
  }

    window.requestAnimationFrame(animationStep.bind(this))
  }

  render() {

    return (
      <div className="sky" style={{backgroundColor: this.props.backgroundColor}}>
        <Box {...this.props}/>
        <div className="sea" style={{backgroundColor: this.props.seaColor}}>
          <div className="glare" style={{backgroundColor: this.props.glare}}></div>
        </div>
      </div>
    )
  }
}

export default App
