import React from 'react';

const LeftIcon = (props) => {
  const computedSize = props.size || '1em';
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
<path d="M21.071 7.341c0 0 0 0 0 0 2.278 0 4.131 1.855 4.131 4.136v9.046c0 2.28-1.853 4.136-4.131 4.136-0.597 0-1.18-0.129-1.732-0.384l-9.8-4.523c-1.481-0.683-2.4-2.121-2.4-3.751s0.92-3.068 2.4-3.752l9.8-4.523c0.552-0.255 1.135-0.384 1.732-0.384zM21.071 22.858c1.285 0 2.331-1.047 2.331-2.335v-9.046c0-1.287-1.045-2.335-2.331-2.335h-0c-0.334 0-0.663 0.073-0.977 0.218l-9.8 4.523c-0.848 0.391-1.354 1.183-1.354 2.116s0.506 1.725 1.354 2.116l9.8 4.523c0.314 0.145 0.643 0.218 0.977 0.218z"/>
</g>
    </svg>
  );
}

export default LeftIcon;

