import React from 'react'

const TabletIcon = (props) => {
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
<path d="M28.427 5.329h-24.853c-0.995 0-1.801 0.806-1.801 1.801v17.74c0 0.995 0.806 1.801 1.801 1.801h24.853c0.995 0 1.801-0.806 1.801-1.801v-17.74c0-0.995-0.806-1.801-1.801-1.801zM5.341 16.088c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9v-0.176c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9v0.176zM25.77 24.87h-17.762c-0.497 0-0.9-0.403-0.9-0.9v-15.939c0-0.497 0.403-0.9 0.9-0.9h17.762c0.497 0 0.9 0.403 0.9 0.9v15.939c0 0.497-0.403 0.9-0.9 0.9z"/>
</g>
    </svg>
  )
}

export default TabletIcon

