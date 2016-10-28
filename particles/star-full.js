import React from 'react';

const StarFullIcon = (props) => {
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
<path d="M17.444 3.501l2.876 6.128c0.226 0.481 0.677 0.819 1.203 0.899l6.559 1.002c1.283 0.196 1.807 1.761 0.901 2.69l-4.845 4.966c-0.353 0.362-0.514 0.871-0.433 1.37l1.13 6.927c0.214 1.314-1.18 2.296-2.345 1.652l-5.717-3.16c-0.48-0.265-1.063-0.265-1.543 0l-5.717 3.16c-1.165 0.644-2.56-0.339-2.345-1.652l1.13-6.927c0.081-0.5-0.079-1.008-0.433-1.37l-4.845-4.966c-0.906-0.929-0.383-2.494 0.901-2.69l6.559-1.002c0.526-0.080 0.977-0.417 1.203-0.899l2.876-6.128c0.574-1.223 2.313-1.223 2.887 0z"/>
</g>
    </svg>
  );
}

export default StarFullIcon;

