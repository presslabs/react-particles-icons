import React from 'react'

const RangeIcon = (props) => {
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

<path d="M27.549 5.335l0-0h-1.745c-0.497 0-0.9-0.403-0.9-0.9v-1.742c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v1.767c0 0.497-0.403 0.9-0.9 0.9h-12.404c-0.497 0-0.9-0.403-0.9-0.9v-1.742c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v1.767c0 0.497-0.403 0.9-0.9 0.9-0.767 0-1.745 0-1.745 0-0.497 0-0.9 0.403-0.9 0.9v23.097c0 0.497 0.403 0.9 0.9 0.9h23.097c0.497 0 0.9-0.403 0.9-0.9v-23.097c0-0.497-0.403-0.9-0.9-0.9zM25.748 28.432h-19.496c-0.497 0-0.9-0.403-0.9-0.9v-14.183c0-0.497 0.403-0.9 0.9-0.9h19.496c0.497 0 0.9 0.403 0.9 0.9v14.183h0c0 0.497-0.403 0.9-0.9 0.9z"/>
<path d="M20.732 16.845c-0.349-0.349-0.946-0.102-0.946 0.392v1.359c0 0.23-0.186 0.416-0.416 0.416h-6.742c-0.23 0-0.416-0.186-0.416-0.416v-1.359c0-0.494-0.597-0.741-0.946-0.392l-3.108 3.108c-0.216 0.216-0.216 0.567 0 0.784l3.108 3.108c0.349 0.349 0.946 0.102 0.946-0.392v-1.359c0-0.23 0.186-0.416 0.416-0.416h6.742c0.23 0 0.416 0.186 0.416 0.416v1.359c0 0.494 0.597 0.741 0.946 0.392l3.108-3.108c0.216-0.216 0.216-0.567 0-0.784l-3.108-3.108z"/>
</g>
    </svg>
  )
}

export default RangeIcon

