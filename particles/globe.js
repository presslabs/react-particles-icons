import React from 'react'

const GlobeIcon = (props) => {
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

<path d="M16 3.551c-6.875 0-12.449 5.574-12.449 12.449s5.574 12.449 12.449 12.449 12.449-5.574 12.449-12.449c0-6.875-5.574-12.449-12.449-12.449zM25.213 10.653h-4.087c-0.561-2.146-1.448-3.895-2.531-4.985 1.852 0.462 3.55 1.418 4.935 2.802 0.662 0.662 1.225 1.395 1.684 2.183zM26.648 16c0 1.227-0.207 2.422-0.602 3.546h-4.543c0.18-1.117 0.277-2.309 0.277-3.546s-0.098-2.428-0.277-3.546h4.543c0.396 1.124 0.602 2.319 0.602 3.546zM16 25.759c-1.060 0-2.434-1.624-3.259-4.412h6.518c-0.825 2.788-2.199 4.412-3.259 4.412zM12.32 19.546c-0.189-1.070-0.3-2.257-0.3-3.546s0.11-2.476 0.3-3.546h7.359c0.189 1.070 0.3 2.257 0.3 3.546s-0.11 2.476-0.3 3.546h-7.359zM5.352 16c0-1.227 0.207-2.422 0.602-3.546h4.543c-0.18 1.117-0.277 2.309-0.277 3.546s0.098 2.428 0.277 3.546h-4.543c-0.396-1.124-0.602-2.319-0.602-3.546zM16 6.241c1.060 0 2.434 1.624 3.259 4.412h-6.518c0.825-2.788 2.199-4.412 3.259-4.412zM8.471 8.471c1.384-1.384 3.083-2.341 4.935-2.802-1.082 1.090-1.97 2.839-2.531 4.985h-4.087c0.459-0.788 1.022-1.521 1.684-2.183zM6.787 21.346h4.087c0.561 2.146 1.448 3.895 2.531 4.985-1.852-0.462-3.55-1.418-4.935-2.802-0.662-0.662-1.225-1.395-1.684-2.183zM23.529 23.529c-1.384 1.384-3.083 2.341-4.935 2.802 1.082-1.090 1.97-2.839 2.531-4.985h4.087c-0.459 0.788-1.022 1.521-1.684 2.183z"/>
</g>
    </svg>
  )
}

export default GlobeIcon

