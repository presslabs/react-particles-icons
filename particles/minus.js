import React from 'react';

const ParticlesMinus = (props) => {
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
<path d="M21.335 16.9h-10.671c-0.497 0-0.9-0.403-0.9-0.9s0.403-0.9 0.9-0.9h10.671c0.497 0 0.9 0.403 0.9 0.9s-0.403 0.9-0.9 0.9z"/>
</g>
    </svg>
  );
}

export default ParticlesMinus;

