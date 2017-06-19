import React from 'react'

const ArrowAltSeIcon = (props) => {
  const computedSize = props.size || '1em'
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ computedSize }
      width={ computedSize }
      viewBox="0 0 32 32"
      style={ { verticalAlign: 'middle' } }
      { ...props }
    >
      <g>

<path d="M25.283 5.585c-0.495 0.009-0.881 0.433-0.881 0.928l0 16.145c0 0.246-0.298 0.37-0.472 0.195l-16.782-16.782c-0.342-0.342-0.899-0.373-1.257-0.048-0.382 0.348-0.392 0.939-0.031 1.3l16.824 16.824c0.174 0.174 0.051 0.472-0.195 0.472h-16.199c-0.496 0-0.898 0.402-0.898 0.898s0.402 0.898 0.898 0.898h19.010c0.238 0 0.467-0.095 0.635-0.263s0.263-0.397 0.263-0.635l-0-19.035c0-0.502-0.411-0.907-0.915-0.898z"/>
</g>
    </svg>
  )
}

export default ArrowAltSeIcon

