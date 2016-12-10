import AppRender from '../containers/AppRender.js'
import React, { Component } from 'react';
import Rx from 'rxjs/Rx';
import { StreamProvider, createSuperstream, reactiveComponent } from 'omnistream';
import { dragMovement } from './actionStreams.js';
import reducer from '../reducers/reducer'
import App from '../components/App.js'


export default class Root extends Component {
  render() {
    return (
      <StreamProvider store={store}>
        <div>
          <AppRender />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
