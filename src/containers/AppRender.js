import { nextTick } from '../actions/actions'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    animationProgress: state.animationProgress,
    backgroundPos: state.backgroundPos,
    backgroundColor: state.backgroundColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextTick: (progress) => {
      dispatch(nextTick(progress))
    }
  }
}

const AppRender = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppRender
