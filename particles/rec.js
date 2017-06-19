import React from 'react'

const RecIcon = (props) => {
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

<path d="M16 10.687c2.93 0 5.313 2.383 5.313 5.313s-2.383 5.313-5.313 5.313-5.313-2.383-5.313-5.313 2.383-5.313 5.313-5.313zM16 8.886c-3.929 0-7.114 3.185-7.114 7.114s3.185 7.114 7.114 7.114 7.114-3.185 7.114-7.114c0-3.929-3.185-7.114-7.114-7.114v0z"/>
</g>
    </svg>
  )
}

export default RecIcon

