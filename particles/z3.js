import React from 'react';

const Z3Icon = (props) => {
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
<path d="M15.994 26.692c-0.236 0-0.472-0.050-0.692-0.15l-9.069-4.122c-0.597-0.271-0.98-0.866-0.98-1.522v-5.633c0-0.285 0.112-0.565 0.325-0.754 0.288-0.256 0.689-0.317 1.034-0.169l9.737 4.173c0.46 0.197 0.672 0.729 0.476 1.189s-0.729 0.672-1.189 0.476l-8.379-3.591c-0.092-0.039-0.194 0.028-0.194 0.128v3.912c0 0.109 0.064 0.208 0.163 0.254l8.651 3.932c0.073 0.033 0.157 0.033 0.231 0l8.651-3.932c0.099-0.045 0.163-0.144 0.163-0.254v-9.204c0-0.109-0.064-0.208-0.163-0.254l-8.665-3.939c-0.071-0.032-0.153-0.033-0.225-0.002l-3.538 1.516c-0.113 0.048-0.113 0.208 0 0.256l3.554 1.523c0.615 0.264 1.013 0.867 1.013 1.536v3.046c0 0.488-0.375 0.907-0.862 0.93-0.52 0.024-0.949-0.39-0.949-0.904v-2.796c0-0.111-0.066-0.212-0.169-0.256l-5.392-2.311c-0.359-0.154-0.591-0.506-0.591-0.896s0.232-0.742 0.591-0.896l5.799-2.485c0.431-0.185 0.923-0.179 1.35 0.015l9.078 4.126c0.595 0.271 0.98 0.868 0.98 1.522v9.742c0 0.654-0.385 1.251-0.98 1.522l-9.069 4.122c-0.22 0.1-0.456 0.15-0.692 0.15z"/>
</g>
    </svg>
  );
}

export default Z3Icon;

