import React from 'react';

const BoardIcon = (props) => {
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
<path d="M25.77 4.429h-6.329c-0.399-1.528-1.788-2.656-3.442-2.656s-3.043 1.128-3.442 2.656h-5.439c-0.497 0-0.9 0.403-0.9 0.9v23.998c0 0.497 0.403 0.9 0.9 0.9h18.651c0.497 0 0.9-0.403 0.9-0.9v-23.998c0-0.497-0.403-0.9-0.9-0.9zM16 3.573c0.639 0 1.2 0.344 1.507 0.856 0.158 0.263 0.249 0.572 0.249 0.9 0 0.968-0.788 1.756-1.756 1.756s-1.756-0.788-1.756-1.756c0-0.329 0.091-0.637 0.249-0.9 0.307-0.512 0.868-0.856 1.507-0.856zM23.992 28.427h-15.094c-0.485 0-0.878-0.393-0.878-0.878v-20.441c0-0.485 0.393-0.878 0.878-0.878v0c0.485 0 0.878 0.393 0.878 0.878v0c0 0.995 0.806 1.801 1.801 1.801h9.737c0.995 0 1.801-0.806 1.801-1.801v0c0-0.485 0.393-0.878 0.878-0.878v0c0.485 0 0.878 0.393 0.878 0.878v20.441c0 0.485-0.393 0.878-0.878 0.878z"/>
</g>
    </svg>
  );
}

export default BoardIcon;

