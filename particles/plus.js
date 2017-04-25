import React from 'react'

const PlusIcon = (props) => {
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
<title>plus</title>
<path d="M21.31 15.1h-3.509c-0.497 0-0.9-0.403-0.9-0.9v-3.509c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v3.534c0 0.497-0.403 0.9-0.9 0.9h-3.509c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h3.534c0.497 0 0.9 0.403 0.9 0.9v3.509c0 0.485 0.373 0.902 0.857 0.925 0.517 0.024 0.944-0.388 0.944-0.899v-3.534c0-0.497 0.403-0.9 0.9-0.9h3.534c0.512 0 0.924-0.427 0.899-0.944-0.023-0.484-0.44-0.857-0.925-0.857z"/>
</g>
    </svg>
  )
}

export default PlusIcon

