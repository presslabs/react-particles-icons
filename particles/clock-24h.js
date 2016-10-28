import React from 'react';

const Clock24hIcon = (props) => {
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
<path d="M23.654 7.333c-0.362-0.319-0.908-0.295-1.241 0.047-0.358 0.368-0.32 0.977 0.064 1.317 2.093 1.855 3.293 4.52 3.293 7.315 0 5.482-4.538 9.924-10.055 9.766-5.163-0.148-9.347-4.344-9.482-9.507-0.132-5.086 3.645-9.335 8.537-9.952 0.149-0.019 0.219 0.179 0.090 0.256l-1.079 0.647c-0.425 0.255-0.587 0.824-0.332 1.249 0.169 0.281 0.467 0.437 0.773 0.437 0.158 0 0.317-0.041 0.462-0.128l4.428-2.657c0.209-0.125 0.369-0.325 0.428-0.561 0.098-0.396-0.076-0.793-0.41-0.994l-4.446-2.668c-0.427-0.256-0.98-0.118-1.235 0.309s-0.118 0.98 0.309 1.235l1.303 0.782c0.116 0.069 0.074 0.245-0.061 0.257-5.998 0.516-10.703 5.626-10.569 11.784 0.133 6.135 5.098 11.135 11.233 11.31 6.533 0.186 11.907-5.075 11.907-11.566-0-3.318-1.428-6.481-3.917-8.678z"/>
<path d="M9.629 18.666c-0.45 0.318-0.728 0.622-0.728 1.019 0 0.491 0.239 0.769 0.887 0.769h4.966c0.648 0 0.9-0.291 0.9-0.769 0-0.489-0.252-0.755-0.9-0.755h-3.085c1.496-0.86 3.562-2.488 3.562-4.488 0-1.8-0.596-2.992-3.271-2.992-0.728 0-1.589 0.119-2.118 0.251-0.344 0.080-0.569 0.331-0.569 0.728 0 0.424 0.238 0.676 0.649 0.676 0.371 0 0.834-0.16 1.522-0.16 1.417 0 1.748 0.676 1.748 1.496-0 1.615-2.065 3.151-3.562 4.224z"/>
<path d="M19.007 12.351c-0.543 1.588-1.734 3.628-2.356 4.448-0.265 0.331-0.478 0.755-0.478 1.060 0 0.462 0.252 0.728 0.901 0.728h4.104v1.165c0 0.542 0.278 0.82 0.953 0.82s0.968-0.278 0.968-0.82v-3.721c0-0.543-0.278-0.822-0.955-0.822-0.675 0-0.966 0.278-0.966 0.822v1.178h-2.913c1.046-1.073 2.715-4.026 2.715-4.912 0-0.491-0.185-0.809-0.822-0.809-0.662 0-0.966 0.331-1.151 0.861z"/>
</g>
    </svg>
  );
}

export default Clock24hIcon;

