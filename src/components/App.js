import React, { Component } from 'react'
import { reactiveComponent } from 'omnistream'
import Box from './Box'
import { nextTick } from '../actions/actions'


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatchObservableFn(nextTick);
  }

  render() {
    return (
      <div className="sky">
        <Box {...this.props}/>
        <div className="sea">
          <div className="glare"></div>
        </div>
      </div>
    )
  }
}

export default reactiveComponent(App, 'timerState$')
