import React from 'react'

const ArrowAltRightIcon = (props) => {
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
<title>arrow-alt-right</title>
<path d="M15.199 1.926c-0.343 0.356-0.317 0.93 0.033 1.279l11.416 11.416c0.174 0.174 0.051 0.472-0.195 0.472h-23.733c-0.484 0-0.9 0.372-0.923 0.855-0.024 0.516 0.387 0.942 0.897 0.942h23.793c0.246 0 0.37 0.298 0.195 0.472l-11.454 11.454c-0.351 0.351-0.351 0.919 0 1.27s0.92 0.351 1.27 0l13.442-13.442c0.169-0.168 0.263-0.397 0.263-0.635s-0.095-0.467-0.263-0.635l-13.46-13.459c-0.355-0.355-0.932-0.351-1.282 0.012z"/>
</g>
    </svg>
  )
}

export default ArrowAltRightIcon

