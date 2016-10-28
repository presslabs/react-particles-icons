import React from 'react';

const ShieldDenyIcon = (props) => {
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
<path d="M25.73 6.612l-8.931-4.652c-0.003-0.002-0.006-0.003-0.009-0.005-0.244-0.123-0.517-0.189-0.789-0.189s-0.546 0.065-0.789 0.189c-0.003 0.002-0.006 0.003-0.009 0.005l-8.931 4.652c-0.588 0.3-0.952 0.896-0.952 1.556v7.035c0 3.217 0.998 6.346 2.886 9.049 1.862 2.664 4.442 4.711 7.461 5.919 0.107 0.043 0.221 0.064 0.334 0.064s0.227-0.021 0.334-0.064c3.020-1.208 5.6-3.255 7.461-5.919 1.888-2.702 2.886-5.831 2.886-9.049v-7.035c0-0.66-0.365-1.256-0.952-1.556zM7.119 15.202v-6.456c0-0.336 0.187-0.644 0.484-0.799l7.981-4.157c0.261-0.136 0.571-0.136 0.832 0l5.828 3.036c0.54 0.281 0.651 1.005 0.221 1.435l-12.722 12.722c-0.45 0.45-1.21 0.303-1.464-0.28-0.75-1.722-1.16-3.589-1.16-5.501zM15.623 28.191c-2.087-0.965-3.886-2.389-5.285-4.11-0.292-0.359-0.266-0.88 0.061-1.207l12.945-12.944c0.567-0.567 1.537-0.165 1.537 0.637v4.636c0 5.496-3.387 10.623-8.503 12.989-0.239 0.111-0.515 0.111-0.754 0.001z"/>
</g>
    </svg>
  );
}

export default ShieldDenyIcon;

