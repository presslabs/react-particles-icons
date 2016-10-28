import React from 'react';

const BoxIcon = (props) => {
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
<path d="M15.768 2.681l-13.338 3.557c-0.394 0.105-0.668 0.462-0.668 0.87v17.784c0 0.408 0.274 0.765 0.668 0.87l13.338 3.557c0.152 0.041 0.312 0.041 0.464 0l13.338-3.557c0.394-0.105 0.668-0.462 0.668-0.87v-17.784c0-0.408-0.274-0.765-0.668-0.87l-13.338-3.557c-0.152-0.041-0.312-0.041-0.464 0zM16.232 4.545l3.324 0.886c0.135 0.036 0.138 0.227 0.003 0.267l-10.231 3.009c-0.158 0.047-0.327 0.049-0.486 0.006l-3.851-1.027c-0.137-0.037-0.137-0.231 0-0.268l10.777-2.874c0.152-0.041 0.312-0.041 0.464 0zM3.562 23.509v-13.168c0-0.592 0.561-1.022 1.132-0.87l2.623 0.699c0.394 0.105 0.668 0.462 0.668 0.87v4.934c0 0.485 0.373 0.902 0.857 0.925 0.517 0.024 0.944-0.388 0.944-0.899v-3.999c0-0.592 0.561-1.022 1.132-0.87l3.512 0.937c0.394 0.105 0.668 0.462 0.668 0.87v13.168c0 0.592-0.561 1.022-1.132 0.87l-9.737-2.596c-0.394-0.105-0.668-0.462-0.668-0.87zM27.769 24.379l-9.737 2.596c-0.572 0.152-1.132-0.278-1.132-0.87v-13.168c0-0.408 0.274-0.765 0.668-0.87l9.737-2.596c0.572-0.152 1.132 0.278 1.132 0.87v13.168c0 0.408-0.274 0.765-0.668 0.87zM15.768 10.56l-2.857-0.762c-0.135-0.036-0.138-0.227-0.003-0.267l10.231-3.009c0.158-0.047 0.327-0.049 0.486-0.006l3.385 0.903c0.137 0.037 0.137 0.231 0 0.268l-10.777 2.874c-0.152 0.041-0.312 0.041-0.464-0z"/>
</g>
    </svg>
  );
}

export default BoxIcon;

