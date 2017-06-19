import React from 'react'

const ArrowAltNeIcon = (props) => {
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

<path d="M5.585 6.717c0.009 0.495 0.433 0.881 0.928 0.881l16.145-0c0.246 0 0.37 0.298 0.195 0.472l-16.782 16.782c-0.342 0.342-0.373 0.899-0.048 1.257 0.348 0.382 0.939 0.392 1.3 0.031l16.824-16.824c0.174-0.174 0.472-0.051 0.472 0.195v16.199c0 0.496 0.402 0.898 0.898 0.898s0.898-0.402 0.898-0.898v-19.010c0-0.238-0.095-0.467-0.263-0.635s-0.397-0.263-0.635-0.263l-19.035 0c-0.502 0-0.907 0.411-0.898 0.915z"/>
</g>
    </svg>
  )
}

export default ArrowAltNeIcon

