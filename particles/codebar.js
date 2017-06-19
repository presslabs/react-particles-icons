import React from 'react'

const CodebarIcon = (props) => {
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

<path d="M1.772 5.329h2.668v21.341h-2.668v-21.341z"/>
<path d="M5.329 5.329h1.778v21.341h-1.778v-21.341z"/>
<path d="M20.446 5.329h1.778v21.341h-1.778v-21.341z"/>
<path d="M8.886 5.329h4.446v21.341h-4.446v-21.341z"/>
<path d="M26.671 5.329h3.557v21.341h-3.557v-21.341z"/>
<path d="M14.222 5.329h0.889v21.341h-0.889v-21.341z"/>
<path d="M23.114 5.329h2.668v21.341h-2.668v-21.341z"/>
<path d="M16 5.329v21.341h2.668v-21.341h-0.889z"/>
</g>
    </svg>
  )
}

export default CodebarIcon

