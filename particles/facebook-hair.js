import React from 'react';

const FacebookHairIcon = (props) => {
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
<path d="M27.156 1.801h-22.313c-1.681 0-3.043 1.362-3.043 3.043v22.313c0 1.68 1.362 3.043 3.043 3.043h22.313c1.68 0 3.043-1.362 3.043-3.043v-22.313c0-1.68-1.362-3.043-3.043-3.043zM29.807 27.157c0 1.462-1.189 2.651-2.651 2.651h-5.937v-10.054h3.562l0.509-4.1h-4.070v-2.634c0-0.599 0.13-1.082 0.389-1.452s0.808-0.554 1.646-0.554h2.185v-3.681c-0.18-0.020-0.564-0.050-1.152-0.090s-1.262-0.060-2.020-0.060c-1.576 0-2.853 0.464-3.831 1.392s-1.467 2.27-1.467 4.026v3.053h-3.562v4.1h3.562v10.054h-12.126c-1.462 0-2.651-1.189-2.651-2.651v-22.313c0-1.462 1.189-2.651 2.651-2.651h22.313c1.462 0 2.651 1.189 2.651 2.651v22.313z"/>
</g>
    </svg>
  );
}

export default FacebookHairIcon;

