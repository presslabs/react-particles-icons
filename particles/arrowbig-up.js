import React from 'react'

const ArrowbigUpIcon = (props) => {
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
<path d="M1.926 16.801c0.356 0.343 0.93 0.317 1.279-0.033l11.416-11.416c0.174-0.174 0.472-0.051 0.472 0.195v23.733c0 0.484 0.372 0.9 0.855 0.923 0.516 0.024 0.942-0.387 0.942-0.897v-23.793c0-0.246 0.298-0.37 0.472-0.195l11.454 11.454c0.351 0.351 0.919 0.351 1.27 0s0.351-0.919 0-1.27l-13.442-13.442c-0.168-0.169-0.397-0.263-0.635-0.263s-0.467 0.095-0.635 0.263l-13.459 13.46c-0.355 0.355-0.351 0.932 0.012 1.282z"/>
</g>
    </svg>
  )
}

export default ArrowbigUpIcon

