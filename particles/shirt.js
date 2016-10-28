import React from 'react';

const ShirtIcon = (props) => {
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
<path d="M27.989 7.865c0.271 0.163 0.437 0.456 0.437 0.772v4.345c0 0.537-0.466 0.954-1 0.895l-1.336-0.148c-0.099-0.011-0.2-0.017-0.299-0.017-1.489 0-2.7 1.212-2.7 2.701v11.113c0 0.497-0.403 0.9-0.9 0.9h-12.382c-0.497 0-0.9-0.403-0.9-0.9v-11.353c0-1.49-1.211-2.701-2.699-2.701-0.149 0-0.299 0.012-0.446 0.037l-1.141 0.19c-0.549 0.091-1.048-0.332-1.048-0.888v-4.174c0-0.316 0.166-0.609 0.437-0.772l6.171-3.703c0.268-0.161 0.601-0.173 0.878-0.027 1.518 0.805 3.207 1.226 4.941 1.226s3.422-0.421 4.941-1.226c0.276-0.146 0.61-0.134 0.878 0.027l6.171 3.703zM21.361 1.937c-0.174 0-0.349 0.051-0.5 0.151-1.472 0.981-3.167 1.472-4.861 1.472s-3.389-0.491-4.861-1.472c-0.151-0.101-0.325-0.151-0.5-0.151-0.16 0-0.32 0.043-0.463 0.128l-7.966 4.78c-0.271 0.163-0.437 0.456-0.437 0.772v7.319c0 0.505 0.412 0.901 0.899 0.901 0.049 0 0.099-0.004 0.15-0.012l3.238-0.54c0.051-0.008 0.101-0.012 0.15-0.012 0.487 0 0.899 0.395 0.899 0.901v13.153c0 0.497 0.403 0.9 0.9 0.9h15.983c0.497 0 0.9-0.403 0.9-0.9v-12.913c0-0.502 0.409-0.901 0.899-0.901 0.033 0 0.067 0.002 0.101 0.006l3.336 0.37c0.034 0.004 0.068 0.006 0.101 0.006 0.49 0 0.899-0.398 0.899-0.901v-7.377c0-0.316-0.166-0.609-0.437-0.772l-7.966-4.78c-0.143-0.086-0.303-0.128-0.463-0.128v0z"/>
</g>
    </svg>
  );
}

export default ShirtIcon;

