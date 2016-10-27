import React from 'react';

const ParticlesCreditcard = (props) => {
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
<path d="M29.327 7.108h-26.654c-0.497 0-0.9 0.403-0.9 0.9v15.983c0 0.497 0.403 0.9 0.9 0.9h26.654c0.497 0 0.9-0.403 0.9-0.9v-15.983c0-0.497-0.403-0.9-0.9-0.9zM28.427 9.787v0c0 0.485-0.393 0.878-0.878 0.878h-23.097c-0.485 0-0.878-0.393-0.878-0.878v0c0-0.485 0.393-0.878 0.878-0.878h23.097c0.485 0 0.878 0.393 0.878 0.878zM3.573 22.213v-7.114c0-0.485 0.393-0.878 0.878-0.878h23.097c0.485 0 0.878 0.393 0.878 0.878v7.114c0 0.485-0.393 0.878-0.878 0.878h-23.097c-0.485 0-0.878-0.393-0.878-0.878z"/>
<path d="M11.565 19.534h-5.335c-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9h5.335c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9z"/>
</g>
    </svg>
  );
}

export default ParticlesCreditcard;

