import React from 'react'
import iconsData from 'presslabs-particles-icons/dist/icons/icons-data.json'

const Particle = (props) => {
  const { size, children } = props
  const computedSize = size || '1em'
  const particleData = iconsData[children] || null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ computedSize }
      width={ computedSize }
      viewBox="0 0 64 64"
      style={ { verticalAlign: 'middle' } }
      { ...props }
    >
      <path d={ particleData } />
    </svg>
  )
}

export default Particle
