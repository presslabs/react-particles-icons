import React from 'react';

const ParticlesFile = (props) => {
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
<path d="M26.473 10.418l-6.646-8.308c-0.171-0.214-0.43-0.338-0.703-0.338h-12.894c-0.497 0-0.9 0.403-0.9 0.9v26.654c0 0.497 0.403 0.9 0.9 0.9h19.54c0.497 0 0.9-0.403 0.9-0.9v-18.347c-0-0.204-0.070-0.403-0.197-0.563zM23.969 28.427h-15.939c-0.497 0-0.9-0.403-0.9-0.9v-23.052c0-0.497 0.403-0.9 0.9-0.9h9.737c0.497 0 0.9 0.403 0.9 0.9v6.18c0 0.497 0.403 0.9 0.9 0.9h4.401c0.497 0 0.9 0.403 0.9 0.9v15.072c-0 0.497-0.403 0.901-0.901 0.901z"/>
</g>
    </svg>
  );
}

export default ParticlesFile;

