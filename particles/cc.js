import React from 'react';

const CcIcon = (props) => {
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
<path d="M16.089 15.973c0-2.768 1.843-4.404 4.158-4.404 1.591 0 2.961 0.582 3.764 2.045l-1.889 0.991c-0.442-0.944-1.198-1.148-1.576-1.148-1.401 0-1.906 1.086-1.906 2.517s0.599 2.517 1.906 2.517c0.757 0 1.355-0.283 1.748-1.227l1.765 0.897c-0.756 1.337-2.127 2.218-3.733 2.218-2.505-0-4.237-1.589-4.237-4.404zM12.123 20.377c1.606 0 2.977-0.881 3.733-2.218l-1.764-0.897c-0.394 0.944-0.993 1.227-1.749 1.227-1.308 0-1.906-1.085-1.906-2.517s0.504-2.517 1.906-2.517c0.378 0 1.134 0.204 1.575 1.148l1.889-0.991c-0.803-1.463-2.174-2.045-3.764-2.045-2.316 0-4.158 1.636-4.158 4.404 0 2.816 1.732 4.404 4.237 4.404zM5.941 25.972c-2.728-2.724-4.168-6.225-4.168-9.999 0-3.735 1.48-7.314 4.207-10.076 2.65-2.684 6.078-4.124 9.974-4.124s7.402 1.44 10.13 4.163c2.688 2.685 4.090 6.186 4.090 10.038 0 3.891-1.402 7.353-4.051 9.96-2.805 2.762-6.428 4.24-10.169 4.24s-7.286-1.478-10.012-4.201zM4.343 15.973c0 3.035 1.247 5.953 3.467 8.17s5.104 3.423 8.182 3.423c3.039 0 5.999-1.206 8.299-3.462 2.181-2.14 3.311-4.941 3.311-8.131 0-3.151-1.169-6.030-3.351-8.209-2.221-2.217-5.064-3.423-8.259-3.423s-6 1.167-8.182 3.384c-2.22 2.257-3.467 5.174-3.467 8.248z"/>
</g>
    </svg>
  );
}

export default CcIcon;

