import React from 'react';

const LookIcon = (props) => {
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
<path d="M29.797 15.438c-1.555-1.953-7.143-8.331-13.797-8.331s-12.242 6.378-13.797 8.331c-0.262 0.329-0.262 0.794 0 1.123 1.555 1.953 7.143 8.331 13.797 8.331s12.242-6.378 13.797-8.331c0.262-0.329 0.262-0.794 0-1.123zM27.404 16.6c-0.868 0.967-2.143 2.257-3.682 3.425-2.682 2.035-5.28 3.067-7.722 3.067s-5.040-1.032-7.722-3.067c-1.539-1.167-2.814-2.458-3.682-3.425-0.306-0.341-0.306-0.859 0-1.2 0.868-0.967 2.143-2.257 3.682-3.425 2.682-2.035 5.28-3.067 7.722-3.067s5.040 1.032 7.722 3.067c1.539 1.167 2.814 2.458 3.682 3.425 0.306 0.341 0.306 0.859 0 1.2z"/>
<path d="M16 10.653c-2.948 0-5.346 2.398-5.346 5.347s2.398 5.346 5.346 5.346c2.948 0 5.347-2.398 5.347-5.346s-2.398-5.346-5.347-5.346zM16 19.546c-1.955 0-3.546-1.591-3.546-3.546s1.591-3.546 3.546-3.546c1.955 0 3.546 1.591 3.546 3.546s-1.591 3.546-3.546 3.546z"/>
<path d="M17.801 16c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
</g>
    </svg>
  );
}

export default LookIcon;

