import React from 'react'

const CautionIcon = (props) => {
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

<path d="M30.052 27.743l-12.513-25.025c-0.317-0.634-0.928-0.951-1.539-0.951s-1.222 0.317-1.539 0.951l-12.513 25.025c-0.572 1.144 0.26 2.491 1.539 2.491h25.025c1.279 0 2.112-1.346 1.539-2.491zM4.268 27.13l10.927-21.853c0.332-0.664 1.279-0.664 1.611 0l10.927 21.853c0.299 0.599-0.136 1.303-0.805 1.303h-21.853c-0.669 0-1.105-0.704-0.805-1.303z"/>
<path d="M15.1 11.554v8.892c0 0.497 0.403 0.9 0.9 0.9s0.9-0.403 0.9-0.9v-8.892c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9z"/>
<path d="M16.9 23.992c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9z"/>
</g>
    </svg>
  )
}

export default CautionIcon

