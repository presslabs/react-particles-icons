import React from 'react';

const CartIcon = (props) => {
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
<path d="M25.347 19.557c0.788 0 1.484-0.512 1.719-1.264l3.321-10.626c0.362-1.16-0.504-2.338-1.719-2.338h-23.314c-1.299 0-2.17 1.333-1.65 2.523l1.615 3.691h-2.631c-0.485 0-0.902 0.373-0.925 0.857-0.024 0.517 0.388 0.944 0.899 0.944h3.445l2.477 5.662-1.736 3.326-0.029 0.062c-0.261 0.61-0.169 1.313 0.252 1.839 0.347 0.433 0.884 0.672 1.439 0.672h19.025c0.485 0 0.902-0.373 0.925-0.857 0.024-0.517-0.388-0.944-0.899-0.944h-17.598c-0.676 0-1.111-0.718-0.798-1.317l0.911-1.745c0.155-0.297 0.463-0.484 0.798-0.484h14.474zM28.667 7.13v0l-3.123 9.994c-0.117 0.376-0.466 0.632-0.859 0.632h-14.093c-0.358 0-0.682-0.212-0.825-0.54l-3.861-8.825c-0.26-0.595 0.176-1.261 0.825-1.261h21.937z"/>
<path d="M12.488 27.582c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M26.671 27.582c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
</g>
    </svg>
  );
}

export default CartIcon;

