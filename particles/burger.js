import React from 'react'

const BurgerIcon = (props) => {
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
<title>burger</title>
<path d="M3.939 8.59h24.121c0.519 0 0.94-0.421 0.94-0.94s-0.421-0.939-0.939-0.939h-24.122c-0.518 0-0.939 0.421-0.939 0.939s0.421 0.94 0.939 0.94z"/>
<path d="M28.061 15.061h-24.122c-0.518 0-0.939 0.42-0.939 0.939s0.421 0.939 0.939 0.939h24.121c0.519 0 0.94-0.42 0.94-0.939s-0.421-0.939-0.939-0.939z"/>
<path d="M28.061 23.41h-24.122c-0.518 0-0.939 0.421-0.939 0.94s0.421 0.939 0.939 0.939h24.121c0.519 0 0.939-0.421 0.939-0.939s-0.42-0.94-0.938-0.94z"/>
</g>
    </svg>
  )
}

export default BurgerIcon

