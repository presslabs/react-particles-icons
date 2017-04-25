import React from 'react'

const PauseIcon = (props) => {
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
<title>pause</title>
<path d="M11.109 24.903c-1.722 0-3.123-1.401-3.123-3.123v-11.56c0-1.722 1.401-3.124 3.123-3.124s3.123 1.401 3.123 3.124v11.56c0 1.722-1.401 3.123-3.123 3.123zM11.109 8.897c-0.729 0-1.323 0.593-1.323 1.323v11.56c0 0.729 0.593 1.323 1.323 1.323s1.323-0.593 1.323-1.323v-11.56c0-0.729-0.593-1.323-1.323-1.323z"/>
<path d="M20.891 24.903c-1.722 0-3.124-1.401-3.124-3.123v-11.56c0-1.722 1.401-3.124 3.124-3.124s3.123 1.401 3.123 3.124v11.56c0 1.722-1.401 3.123-3.123 3.123zM20.891 8.897c-0.729 0-1.323 0.593-1.323 1.323v11.56c0 0.729 0.593 1.323 1.323 1.323s1.323-0.593 1.323-1.323v-11.56c0-0.729-0.593-1.323-1.323-1.323z"/>
</g>
    </svg>
  )
}

export default PauseIcon

