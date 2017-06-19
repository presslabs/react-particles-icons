import React from 'react'

const StackIcon = (props) => {
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

<path d="M29.867 6.838l-6.273-4.705c-0.312-0.234-0.691-0.36-1.081-0.36h-13.027c-0.39 0-0.769 0.126-1.081 0.36l-6.273 4.705c-0.227 0.17-0.36 0.437-0.36 0.72v5.763c0 0.497 0.403 0.9 0.9 0.9h26.654c0.497 0 0.9-0.403 0.9-0.9v-5.763c0-0.283-0.133-0.55-0.36-0.72zM9.579 3.573h12.842c0.060 0 0.118 0.019 0.166 0.055l3.944 2.958c0.213 0.16 0.1 0.499-0.166 0.499h-20.73c-0.266 0-0.379-0.339-0.166-0.499l3.944-2.958c0.048-0.036 0.106-0.055 0.166-0.055zM27.526 12.421h-23.052c-0.497 0-0.9-0.403-0.9-0.9v-1.711c0-0.497 0.403-0.9 0.9-0.9h23.052c0.497 0 0.9 0.403 0.9 0.9v1.711c0 0.497-0.403 0.9-0.9 0.9z"/>
<path d="M29.327 23.114h-26.654c-0.497 0-0.9 0.403-0.9 0.9v5.313c0 0.497 0.403 0.9 0.9 0.9h26.654c0.497 0 0.9-0.403 0.9-0.9v-5.313c0-0.497-0.403-0.9-0.9-0.9zM27.526 28.427h-23.052c-0.497 0-0.9-0.403-0.9-0.9v-1.711c0-0.497 0.403-0.9 0.9-0.9h23.052c0.497 0 0.9 0.403 0.9 0.9v1.711c0 0.497-0.403 0.9-0.9 0.9z"/>
<path d="M29.327 15.111h-26.654c-0.497 0-0.9 0.403-0.9 0.9v5.313c0 0.497 0.403 0.9 0.9 0.9h26.654c0.497 0 0.9-0.403 0.9-0.9v-5.313c0-0.497-0.403-0.9-0.9-0.9zM27.526 20.424h-23.052c-0.497 0-0.9-0.403-0.9-0.9v-1.711c0-0.497 0.403-0.9 0.9-0.9h23.052c0.497 0 0.9 0.403 0.9 0.9v1.711c0 0.497-0.403 0.9-0.9 0.9z"/>
<path d="M9.775 11.565h12.449c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9h-12.449c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9z"/>
<path d="M9.775 19.568h12.449c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9h-12.449c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9z"/>
<path d="M9.775 27.571h12.449c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9h-12.449c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9z"/>
</g>
    </svg>
  )
}

export default StackIcon

