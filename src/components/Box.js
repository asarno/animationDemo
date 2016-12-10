import React from 'react'

const Box = ( {...props} ) => {

    let style = {
      transform: `translateY(${props.backgroundPos}px)`
    }

    return (
      <div className="box" style={style}></div>
    )
}

export default Box
