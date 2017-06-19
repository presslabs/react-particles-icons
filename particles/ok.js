import React from 'react'

const OkIcon = (props) => {
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

<path d="M16 16.028c3.935 0 7.136-3.201 7.136-7.136s-3.201-7.136-7.136-7.136-7.136 3.201-7.136 7.136 3.201 7.136 7.136 7.136zM16 3.556c2.947 0 5.335 2.389 5.335 5.335s-2.389 5.335-5.335 5.335-5.335-2.389-5.335-5.335 2.389-5.335 5.335-5.335z"/>
<path d="M24.886 16.729c-0.102-0.507-0.605-0.821-1.101-0.697-5.747 1.437-9.822 1.437-15.569 0-0.496-0.124-0.999 0.19-1.101 0.696-0.096 0.476 0.219 0.94 0.691 1.057 2.094 0.522 3.969 0.854 5.747 1.013 0.414 0.037 0.643 0.498 0.42 0.849l-5.846 9.214c-0.266 0.42-0.142 0.976 0.278 1.243 0.15 0.095 0.317 0.14 0.482 0.14 0.298 0 0.59-0.148 0.761-0.418l5.886-9.276c0.218-0.343 0.718-0.343 0.936 0l5.886 9.276c0.172 0.27 0.463 0.418 0.761 0.418 0.165 0 0.332-0.045 0.482-0.14 0.42-0.266 0.544-0.823 0.278-1.243l-5.846-9.214c-0.223-0.351 0.006-0.812 0.42-0.849 1.778-0.159 3.653-0.491 5.747-1.013 0.471-0.118 0.786-0.581 0.69-1.057z"/>
</g>
    </svg>
  )
}

export default OkIcon

