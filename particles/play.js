import React from 'react';

const PlayIcon = (props) => {
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
<path d="M22.461 14.959c1.062 0.5 1.077 1.34 0.033 1.876l-11.31 5.812c-1.044 0.536-1.907 0.020-1.927-1.154l-0.187-10.727c-0.021-1.174 0.824-1.72 1.886-1.22l11.506 5.413z"/>
</g>
    </svg>
  );
}

export default PlayIcon;

