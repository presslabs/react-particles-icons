import React from 'react';

const MagnetIcon = (props) => {
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
<path d="M16.81 9.903l11.703 1.56c0.914 0.122 1.725-0.589 1.725-1.51v-4.967c0-0.764-0.565-1.41-1.322-1.51l-11.083-1.478c-2.859-0.381-5.729 0.097-8.301 1.381-2.589 1.294-4.682 3.311-6.052 5.833-1.125 2.070-1.719 4.417-1.719 6.788s0.595 4.717 1.719 6.788c1.37 2.522 3.463 4.539 6.052 5.833 1.997 0.998 4.174 1.509 6.387 1.509 0.636 0 1.276-0.042 1.914-0.127l11.083-1.478c0.757-0.101 1.322-0.747 1.322-1.51v-4.967c0-0.922-0.812-1.632-1.725-1.51l-11.703 1.56c-2.524 0.336-4.958-0.843-6.201-3.005-0.538-0.936-0.823-2.005-0.823-3.092s0.284-2.156 0.823-3.092c1.243-2.162 3.677-3.341 6.201-3.005zM24.014 5.272c0-0.335 0.295-0.594 0.627-0.549l3.315 0.442c0.275 0.037 0.481 0.271 0.481 0.549v3.29c0 0.335-0.295 0.594-0.627 0.549l-3.315-0.442c-0.275-0.037-0.481-0.271-0.481-0.549v-3.29zM24.014 23.439c0-0.278 0.206-0.513 0.481-0.549l3.315-0.442c0.332-0.044 0.627 0.214 0.627 0.549v3.29c0 0.278-0.206 0.513-0.481 0.549l-3.315 0.442c-0.332 0.044-0.627-0.214-0.627-0.549v-3.29zM9.048 12.010c-0.695 1.209-1.062 2.588-1.062 3.99s0.367 2.781 1.062 3.99c0.79 1.373 1.969 2.466 3.409 3.162 1.427 0.688 3.014 0.941 4.591 0.731l4.538-0.605c0.332-0.044 0.627 0.214 0.627 0.549 0 0 0.001 2.27 0.002 3.29 0 0.278-0.205 0.512-0.481 0.549l-4.139 0.552c-2.5 0.333-5.010-0.084-7.258-1.207-2.257-1.128-4.081-2.885-5.274-5.082-0.982-1.807-1.501-3.857-1.501-5.928s0.519-4.121 1.501-5.928c1.193-2.197 3.017-3.954 5.274-5.082 1.746-0.872 3.649-1.319 5.583-1.319 0.557 0 1.116 0.037 1.675 0.111l4.139 0.552c0.275 0.037 0.481 0.271 0.48 0.549-0.001 1.019-0.002 3.29-0.002 3.29 0 0.335-0.295 0.594-0.627 0.549l-4.538-0.605c-1.577-0.21-3.164 0.043-4.591 0.731-1.441 0.695-2.62 1.788-3.409 3.162z"/>
</g>
    </svg>
  );
}

export default MagnetIcon;

