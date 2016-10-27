import React from 'react';

const ParticlesElipsis = (props) => {
  const computedSize = props.size || '1em';
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={computedSize}
      width={computedSize}
      viewBox="0 0 32 32"
      style={{ verticalAlign: 'middle' }}
      {...props}
    >
      <g>
<path d="M8.886 16c0 1.964-1.592 3.557-3.557 3.557s-3.557-1.592-3.557-3.557c0-1.964 1.592-3.557 3.557-3.557s3.557 1.592 3.557 3.557z"/>
<path d="M19.557 16c0 1.964-1.592 3.557-3.557 3.557s-3.557-1.592-3.557-3.557c0-1.964 1.592-3.557 3.557-3.557s3.557 1.592 3.557 3.557z"/>
<path d="M30.227 16c0 1.964-1.592 3.557-3.557 3.557s-3.557-1.592-3.557-3.557c0-1.964 1.592-3.557 3.557-3.557s3.557 1.592 3.557 3.557z"/>
</g>
    </svg>
  );
}

export default ParticlesElipsis;

