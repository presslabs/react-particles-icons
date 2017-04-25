import React from 'react'

const TimesIcon = (props) => {
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
<title>times</title>
<path d="M17.91 15.363l2.478-2.478c0.351-0.351 0.377-0.925 0.033-1.282-0.35-0.364-0.93-0.368-1.285-0.012l-2.499 2.499c-0.352 0.352-0.922 0.352-1.273 0l-2.499-2.499c-0.352-0.352-0.922-0.352-1.273 0s-0.352 0.922 0 1.273l2.499 2.499c0.352 0.352 0.352 0.922 0 1.273l-2.499 2.499c-0.352 0.352-0.352 0.922 0 1.273 0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264l2.499-2.499c0.352-0.352 0.922-0.352 1.273 0l2.499 2.499c0.176 0.176 0.406 0.264 0.637 0.264s0.461-0.088 0.637-0.264c0.35-0.35 0.331-0.942-0.019-1.292l-2.48-2.48c-0.352-0.352-0.352-0.922 0-1.274z"/>
</g>
    </svg>
  )
}

export default TimesIcon

