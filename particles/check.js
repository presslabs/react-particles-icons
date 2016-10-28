import React from 'react';

const CheckIcon = (props) => {
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
<path d="M12.443 23.24c-0.692 0-1.383-0.263-1.91-0.79l-4.951-4.951c-0.352-0.352-0.352-0.922 0-1.273s0.922-0.352 1.273 0l4.951 4.951c0.351 0.351 0.922 0.351 1.273 0l12.065-12.065c0.352-0.352 0.922-0.352 1.273 0s0.352 0.922 0 1.273l-12.065 12.065c-0.527 0.527-1.218 0.79-1.91 0.79z"/>
</g>
    </svg>
  );
}

export default CheckIcon;

