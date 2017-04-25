import React from 'react'

const ArrowAltNwIcon = (props) => {
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
<title>arrow-alt-nw</title>
<path d="M6.717 26.415c0.495-0.009 0.881-0.433 0.881-0.928l-0-16.145c0-0.246 0.298-0.37 0.472-0.195l16.782 16.782c0.342 0.342 0.899 0.373 1.257 0.048 0.382-0.348 0.392-0.939 0.031-1.3l-16.824-16.824c-0.174-0.174-0.051-0.472 0.195-0.472h16.199c0.496-0 0.898-0.402 0.898-0.898s-0.402-0.898-0.898-0.898h-19.010c-0.238-0-0.467 0.095-0.635 0.263s-0.263 0.397-0.263 0.635l0 19.035c0 0.502 0.411 0.907 0.915 0.898z"/>
</g>
    </svg>
  )
}

export default ArrowAltNwIcon

