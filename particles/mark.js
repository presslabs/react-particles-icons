import React from 'react';

const MarkIcon = (props) => {
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
<path d="M25.781 12.432c-0.497 0-0.9 0.403-0.9 0.9v9.748c0 0.993-0.808 1.801-1.801 1.801h-14.16c-0.993 0-1.801-0.808-1.801-1.801v-14.16c0-0.993 0.808-1.801 1.801-1.801h9.748c0.497 0 0.9-0.403 0.9-0.9s-0.403-0.9-0.9-0.9h-9.748c-1.986 0-3.602 1.616-3.602 3.602v14.16c0 1.986 1.616 3.602 3.602 3.602h14.16c1.986 0 3.602-1.616 3.602-3.602v-9.748c0-0.497-0.403-0.9-0.9-0.9z"/>
</g>
    </svg>
  );
}

export default MarkIcon;

