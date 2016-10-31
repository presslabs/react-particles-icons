import React from 'react'

const DivideIcon = (props) => {
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
<path d="M21.335 15.1h-10.671c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h10.671c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
<path d="M17.801 11.531c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M17.801 20.424c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
</g>
    </svg>
  )
}

export default DivideIcon

