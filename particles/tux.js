import React from 'react';

const TuxIcon = (props) => {
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
<path d="M14.908 22.312c-0.002-0.010-0.004-0.019-0.006-0.029-0.155-0.579-0.75-0.922-1.329-0.767-0.229 0.061-0.421 0.192-0.56 0.362-0.081 0.1-0.236 0.074-0.282-0.046-0.001-0.004-0.003-0.008-0.004-0.011-0.196-0.5-0.745-0.786-1.267-0.659-0.594 0.145-0.949 0.748-0.792 1.335 0.001 0.003 0.002 0.006 0.002 0.009 0.023 0.084-0.062 0.153-0.14 0.113-0.23-0.117-0.503-0.154-0.772-0.081-0.579 0.155-0.922 0.75-0.767 1.329 0.009 0.035 0.020 0.068 0.033 0.101 0.007 0.028 0.014 0.058 0.022 0.087 0.483 1.804 2.947 4.734 4.332 4.363s2.061-4.142 1.578-5.946c-0.015-0.057-0.031-0.11-0.048-0.159z"/>
<path d="M17.112 22.471c-0.483 1.804 0.192 5.575 1.578 5.946s3.849-2.558 4.332-4.363c0.008-0.030 0.015-0.059 0.022-0.087 0.012-0.033 0.023-0.066 0.033-0.101 0.155-0.579-0.188-1.174-0.767-1.329-0.269-0.072-0.542-0.036-0.772 0.081-0.078 0.040-0.163-0.029-0.14-0.113 0.001-0.003 0.002-0.006 0.002-0.009 0.157-0.587-0.198-1.191-0.792-1.335-0.522-0.127-1.071 0.159-1.267 0.659-0.002 0.004-0.003 0.008-0.004 0.011-0.046 0.12-0.201 0.146-0.282 0.046-0.139-0.171-0.331-0.301-0.56-0.362-0.579-0.155-1.174 0.188-1.329 0.767-0.003 0.010-0.004 0.019-0.006 0.029-0.017 0.050-0.032 0.102-0.048 0.159z"/>
<path d="M22.567 15.872h0.002c-1.345-1.843-2.139-4.114-2.139-6.571 0-0.339 0.016-1.204 0.016-1.305 0-2.456-1.991-4.446-4.446-4.446s-4.446 1.991-4.446 4.446c0 0.101 0.005 0.201 0.011 0.3 0 0 0.012 0.666 0.012 1.005 0 2.346-0.724 4.522-1.961 6.318-1.016 1.342-1.619 3.014-1.619 4.826 0 0.743 0.102 1.463 0.291 2.145v-0.002c1.037-0.606 1.447-1.389 1.969-2.453 0.368-0.751 0.661-2.036 0.861-2.846v0c0.040-0.16 0.104-0.313 0.191-0.453 0.859-1.383 1.607-2.832 2.238-4.333 0.038-0.090 0.071-0.181 0.1-0.274l0.54-1.738c0.005-0.016 0.010-0.031 0.017-0.046 0.146-0.351 0.651-0.34 0.81 0.006 0.165 0.36 0.537 0.986 0.974 0.986 0.449 0 0.836-0.663 1.004-1.004 0.178-0.359 0.709-0.354 0.859 0.017 0.005 0.013 0.010 0.027 0.014 0.041l0.54 1.738c0.029 0.093 0.062 0.185 0.1 0.274 0.63 1.501 1.379 2.95 2.238 4.333 0.087 0.14 0.151 0.293 0.191 0.453v0c0.189 0.764 0.447 2.263 0.771 2.975 0.505 1.113 1.040 1.771 1.975 2.325h0.032c0.189-0.682 0.291-1.401 0.291-2.143 0-1.701-0.531-3.277-1.435-4.574z"/>
</g>
    </svg>
  );
}

export default TuxIcon;

