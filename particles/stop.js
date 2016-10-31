import React from 'react'

const StopIcon = (props) => {
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
<path d="M20.401 24.903h-8.803c-2.482 0-4.502-2.020-4.502-4.502v-8.803c0-2.482 2.020-4.502 4.502-4.502h8.802c2.483 0 4.502 2.020 4.502 4.502v8.803c0 2.482-2.020 4.502-4.502 4.502zM11.599 8.897c-1.49 0-2.701 1.212-2.701 2.701v8.803c0 1.49 1.212 2.701 2.701 2.701h8.802c1.49 0 2.701-1.212 2.701-2.701v-8.803c0-1.49-1.212-2.701-2.701-2.701h-8.802z"/>
</g>
    </svg>
  )
}

export default StopIcon

