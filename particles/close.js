import React from 'react'

const CloseIcon = (props) => {
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
<path d="M17.26 15.997l8.142-8.142c0.35-0.35 0.35-0.918-0-1.269s-0.919-0.351-1.269-0l-8.142 8.142-8.142-8.142c-0.35-0.35-0.918-0.35-1.269 0s-0.351 0.918-0 1.269l8.142 8.142-8.142 8.142c-0.35 0.35-0.35 0.918 0 1.269s0.918 0.351 1.269 0l8.142-8.142 8.142 8.142c0.35 0.35 0.918 0.35 1.269-0s0.351-0.919 0-1.269l-8.142-8.142z"/>
</g>
    </svg>
  )
}

export default CloseIcon

