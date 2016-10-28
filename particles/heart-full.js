import React from 'react';

const HeartFullIcon = (props) => {
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
<path d="M24.766 2.978c-2.171 0-4.776 1.019-7.471 2.189-0.412 0.179-0.853 0.268-1.294 0.268s-0.882-0.089-1.294-0.268c-2.695-1.17-5.3-2.189-7.471-2.189-1.292-0-2.429 0.36-3.342 1.264-2.692 2.664-2.745 7.269-0.626 11.984 1.14 2.536 2.899 5.104 5.238 7.419 1.851 1.832 3.861 3.304 5.89 4.398 0.502 0.271 1.054 0.406 1.606 0.406s1.103-0.135 1.606-0.406c2.028-1.094 4.039-2.566 5.89-4.398 2.339-2.315 4.098-4.882 5.238-7.419 2.12-4.715 2.066-9.32-0.626-11.984-0.913-0.903-2.051-1.264-3.342-1.264v0z"/>
</g>
    </svg>
  );
}

export default HeartFullIcon;

