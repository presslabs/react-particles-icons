import React from 'react'

const GoogleFullIcon = (props) => {
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
<title>google-full</title>
<path d="M27.156 1.801h-22.313c-1.68 0-3.043 1.362-3.043 3.043v22.313c0 1.68 1.362 3.043 3.043 3.043h22.313c1.68 0 3.043-1.362 3.043-3.043v-22.313c0-1.681-1.362-3.043-3.043-3.043zM16.904 20.184c-1.022 1.175-2.477 1.77-4.323 1.77-3.283 0-5.954-2.671-5.954-5.954s2.671-5.954 5.954-5.954c1.486 0 2.909 0.55 4.006 1.55-0.823 0.778-1.080 1.066-1.306 1.32-0.117 0.132-0.223 0.25-0.389 0.416h-0c-0.546-0.452-1.203-0.869-2.311-0.869-1.95 0-3.478 1.553-3.478 3.537s1.528 3.537 3.478 3.537c1.977 0 2.693-0.874 3.159-2.187l0.062-0.174-3.221 0.003v-2.358h5.718c0.219 1.566-0.033 3.797-1.395 5.363zM25.373 16.413h-2.063v2.122h-1.474v-2.122h-2.122v-1.474h2.122v-2.063h1.474v2.063h2.063v1.474z"/>
</g>
    </svg>
  )
}

export default GoogleFullIcon

