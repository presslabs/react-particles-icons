import React from 'react';

const LockIcon = (props) => {
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
<path d="M23.56 14.222h0.010v-3.112c0-4.174-3.396-7.57-7.57-7.57s-7.57 3.396-7.57 7.57v3.112h0.010c-0.778 0.426-1.306 1.252-1.306 2.2v3.208c0 4.87 3.962 8.831 8.831 8.831h0.069c4.869 0 8.831-3.962 8.831-8.831v-3.208c-0-0.948-0.529-1.774-1.306-2.2zM16.057 5.341c3.176 0.031 5.712 2.666 5.712 5.842v1.832c0 0.497-0.403 0.9-0.9 0.9h-9.737c-0.497 0-0.9-0.403-0.9-0.9v-1.905c0-3.2 2.619-5.8 5.826-5.768zM23.065 19.629c0 3.877-3.154 7.030-7.030 7.030h-0.069c-3.877 0-7.030-3.154-7.030-7.030v-3.208c0-0.389 0.317-0.706 0.706-0.706h12.718c0.389 0 0.706 0.317 0.706 0.706v3.208z"/>
<path d="M15.886 17.782c-0.895 0.056-1.62 0.792-1.663 1.688-0.027 0.561 0.207 1.068 0.59 1.411 0.19 0.17 0.297 0.413 0.297 0.668v1.54c0 0.479 0.368 0.891 0.846 0.913 0.511 0.024 0.932-0.383 0.932-0.888v-1.545c0-0.26 0.103-0.513 0.297-0.687 0.364-0.326 0.593-0.798 0.593-1.325-0-1.020-0.858-1.839-1.892-1.775z"/>
</g>
    </svg>
  );
}

export default LockIcon;

