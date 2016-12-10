const BACKGROUND_POS_START = 50;

// RGB colors
const SKY_COLOR_RED_START   = 50
const SKY_COLOR_RED_END     = 25
const SKY_COLOR_RED_DIFF    = SKY_COLOR_RED_END - SKY_COLOR_RED_START

const SKY_COLOR_GREEN_START = 180
const SKY_COLOR_GREEN_END   = 25
const SKY_COLOR_GREEN_DIFF  = SKY_COLOR_GREEN_END - SKY_COLOR_GREEN_START

const SKY_COLOR_BLUE_START  = 225
const SKY_COLOR_BLUE_END    = 25
const SKY_COLOR_BLUE_DIFF   = SKY_COLOR_BLUE_END -SKY_COLOR_BLUE_START


const getBackgroundColor = function(animationProgress) {
  let red   = SKY_COLOR_RED_START   + Math.ceil(animationProgress * SKY_COLOR_RED_DIFF)
  let green = SKY_COLOR_GREEN_START + Math.ceil(animationProgress * SKY_COLOR_GREEN_DIFF)
  let blue  = SKY_COLOR_BLUE_START  + Math.ceil(animationProgress * SKY_COLOR_BLUE_DIFF)
  return `rgba(${red}, ${green}, ${blue}, 10)`
}

const initialState = {
  animationProgress: 0,
  backgroundPos: 0,
  backgroundColor: 'rgba(50, 187, 255, 10)'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEXT_ANIMATION_STEP':
      let progress = action.progress
      return Object.assign({}, state, {
        animationProgress: progress,
        backgroundPos: Math.floor(progress * 10 + BACKGROUND_POS_START),
        backgroundColor: getBackgroundColor(progress)
      })
    default:
      return state
  }
}

export default reducer
