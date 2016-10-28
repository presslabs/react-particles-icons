import React from 'react';

const GitiumIcon = (props) => {
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
<path d="M24.381 5.333l-18.286 0.001c-0.42 0-0.761 0.341-0.761 0.761s0.341 0.761 0.761 0.761h18.286c0.421 0 0.762 0.341 0.762 0.762v16.762c0 0.421-0.341 0.762-0.762 0.762h-16.762c-0.421 0-0.762-0.341-0.762-0.762v-13.714c0-0.421 0.341-0.762 0.762-0.762h6.857c0.421 0 0.762-0.341 0.762-0.762s-0.341-0.762-0.762-0.762c-0.001 0-0.001 0-0.002 0l-6.855-0c-1.262 0-2.286 1.023-2.286 2.286v13.714c0 1.262 1.023 2.286 2.286 2.286h16.762c1.262 0 2.286-1.023 2.286-2.286v-16.762c0-1.262-1.023-2.286-2.286-2.286z"/>
<path d="M10.667 19.048c-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c0.995 0 1.841-0.636 2.155-1.524h6.356c0.314 0.888 1.16 1.524 2.155 1.524 1.262 0 2.286-1.023 2.286-2.286s-1.023-2.286-2.286-2.286c-0.948 0-1.761 0.577-2.107 1.399-0.506-0.263-0.75-0.966-1.112-2.292-0.306-1.118-0.652-2.386-1.489-3.405-0.884-1.076-2.13-1.658-3.795-1.774-0.307-0.899-1.159-1.547-2.163-1.547-1.262 0-2.286 1.023-2.286 2.286s1.023 2.286 2.286 2.286c0.986 0 1.826-0.624 2.146-1.498 2.787 0.236 3.295 2.094 3.831 4.054 0.199 0.73 0.39 1.425 0.702 2.015h-4.524c-0.314-0.888-1.16-1.524-2.155-1.524zM10.667 22.095c-0.421 0-0.762-0.341-0.762-0.762s0.341-0.762 0.762-0.762 0.762 0.341 0.762 0.762c0 0.421-0.341 0.762-0.762 0.762zM21.333 20.571c0.421 0 0.762 0.341 0.762 0.762s-0.341 0.762-0.762 0.762c-0.421 0-0.762-0.341-0.762-0.762s0.341-0.762 0.762-0.762zM10.667 14.476c-0.421 0-0.762-0.341-0.762-0.762s0.341-0.762 0.762-0.762 0.762 0.341 0.762 0.762c0 0.421-0.341 0.762-0.762 0.762z"/>
</g>
    </svg>
  );
}

export default GitiumIcon;

