import React from 'react';

const ParticlesCaret = (props) => {
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
<path d="M14.121 19.176l-5.576-5.576c-0.352-0.352-0.352-0.922 0-1.273s0.922-0.352 1.273 0l5.576 5.576c0.351 0.351 0.922 0.351 1.273 0l5.502-5.502c0.352-0.352 0.922-0.352 1.273 0s0.352 0.922 0 1.273l-5.502 5.502c-0.527 0.527-1.218 0.79-1.91 0.79s-1.383-0.263-1.91-0.79z"/>
</g>
    </svg>
  );
}

export default ParticlesCaret;

