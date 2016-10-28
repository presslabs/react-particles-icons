import React from 'react';

const EmployeeIcon = (props) => {
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
<path d="M28.341 23.248c-0.035-0.269-0.079-0.535-0.132-0.798-0.183-0.921-0.468-1.806-0.843-2.642-0.267-0.597-0.581-1.169-0.935-1.712-0.071-0.109-0.143-0.216-0.218-0.322-0.222-0.318-0.459-0.626-0.71-0.922-0.083-0.099-0.168-0.196-0.255-0.292-0.519-0.575-1.090-1.102-1.707-1.573-0.087-0.066-0.175-0.132-0.264-0.196-0.372-0.269-0.486-0.774-0.259-1.173 0.010-0.018 0.019-0.035 0.027-0.049 0.094-0.174 0.181-0.351 0.262-0.533s0.155-0.366 0.223-0.554c0.101-0.282 0.188-0.571 0.257-0.867 0.139-0.591 0.213-1.208 0.213-1.842 0-1.588-0.463-3.069-1.261-4.314-0.035-0.054-0.070-0.108-0.106-0.161-0.072-0.106-0.146-0.211-0.223-0.314-0.038-0.051-0.077-0.102-0.117-0.153-0.158-0.202-0.326-0.395-0.503-0.581-0.088-0.093-0.179-0.183-0.271-0.272s-0.187-0.174-0.284-0.258c-0.048-0.042-0.097-0.083-0.147-0.124-0.099-0.082-0.2-0.161-0.302-0.238-0.565-0.422-1.187-0.772-1.854-1.035-0.909-0.358-1.899-0.555-2.934-0.555v0 0c-0.138 0-0.275 0.003-0.412 0.010-0.068 0.003-0.136 0.008-0.204 0.013-0.406 0.031-0.804 0.092-1.192 0.182-1.033 0.238-1.989 0.677-2.825 1.272-0.105 0.074-0.207 0.151-0.308 0.23-0.202 0.158-0.395 0.326-0.581 0.503-0.093 0.088-0.183 0.179-0.271 0.271-0.177 0.185-0.345 0.379-0.503 0.581-0.436 0.554-0.8 1.168-1.078 1.826-0.025 0.060-0.050 0.12-0.074 0.181-0.358 0.909-0.555 1.899-0.555 2.934 0 0.845 0.131 1.66 0.374 2.425 0.061 0.191 0.129 0.379 0.203 0.564s0.155 0.366 0.243 0.543c0.054 0.11 0.111 0.22 0.171 0.327 0.219 0.397 0.099 0.894-0.269 1.16-3.13 2.261-5.168 5.941-5.168 10.098 0 1.397 1.027 2.509 2.665 3.339 0.126 0.064 0.255 0.126 0.388 0.186 0.266 0.121 0.546 0.235 0.837 0.342 0.146 0.054 0.295 0.106 0.447 0.156 0.076 0.025 0.153 0.050 0.23 0.074 0.155 0.049 0.312 0.096 0.472 0.141 0.64 0.181 1.32 0.336 2.030 0.463 1.685 0.303 3.533 0.454 5.381 0.454v0 0c3.21 0 6.419-0.457 8.775-1.371 0.214-0.083 0.421-0.17 0.621-0.261s0.391-0.185 0.575-0.283c0.367-0.196 0.7-0.408 0.995-0.635 0.098-0.076 0.192-0.153 0.282-0.232 0.762-0.671 1.201-1.462 1.201-2.376 0-0.557-0.037-1.106-0.108-1.644zM9.818 9.327c0.001-0.006 0.002-0.013 0.003-0.019 0.004-0.026 0.010-0.052 0.016-0.077 0.001-0.003 0.002-0.005 0.002-0.008 0.006-0.023 0.014-0.046 0.022-0.068 0.002-0.005 0.004-0.011 0.006-0.016 0.009-0.024 0.019-0.047 0.030-0.069 0.002-0.004 0.004-0.007 0.006-0.011 0.010-0.020 0.021-0.039 0.032-0.058 0.003-0.004 0.005-0.009 0.008-0.013 0.013-0.021 0.027-0.041 0.042-0.060 0.003-0.004 0.006-0.008 0.009-0.011 0.013-0.017 0.027-0.034 0.042-0.050 0.003-0.003 0.006-0.006 0.008-0.009 0.017-0.018 0.034-0.035 0.052-0.051 0.004-0.004 0.008-0.007 0.012-0.011 0.017-0.015 0.034-0.029 0.052-0.042 0.002-0.002 0.005-0.004 0.007-0.005 0.020-0.015 0.040-0.028 0.060-0.041 0.005-0.003 0.009-0.006 0.014-0.009 0.020-0.012 0.041-0.024 0.063-0.035 0.001-0 0.002-0.001 0.002-0.001 0.022-0.011 0.045-0.021 0.067-0.030 0.005-0.002 0.011-0.004 0.016-0.006 0.023-0.009 0.046-0.017 0.070-0.023 0.002-0.001 0.003-0.001 0.005-0.001 0.022-0.006 0.045-0.012 0.068-0.016 0.006-0.001 0.011-0.002 0.017-0.003 0.024-0.004 0.048-0.008 0.073-0.010 0.004-0 0.007-0.001 0.011-0.001 0.022-0.002 0.044-0.003 0.066-0.003 0.005-0 0.010-0 0.016-0 0.029 0 0.058 0.002 0.088 0.005 0.005 0.001 0.010 0.001 0.015 0.002 0.029 0.004 0.059 0.009 0.088 0.015 0.005 0.001 0.009 0.002 0.014 0.003 0.030 0.007 0.060 0.016 0.090 0.027 0.003 0.001 0.006 0.003 0.010 0.004 0.031 0.012 0.062 0.025 0.093 0.040l1.642 0.821c0.029 0.014 0.058 0.026 0.087 0.037 0.007 0.003 0.015 0.005 0.023 0.008 0.028 0.009 0.055 0.018 0.083 0.025 0.002 0.001 0.004 0.001 0.006 0.002 0.030 0.007 0.060 0.012 0.090 0.016 0.008 0.001 0.015 0.002 0.023 0.002 0.027 0.003 0.054 0.004 0.081 0.005 0.003 0 0.006 0.001 0.009 0.001 0.001 0 0.002-0 0.003-0 0.027-0 0.053-0.001 0.079-0.004 0.007-0.001 0.014-0.002 0.021-0.003 0.020-0.002 0.039-0.005 0.058-0.009 0.009-0.002 0.018-0.003 0.027-0.005 0.018-0.004 0.036-0.008 0.054-0.013 0.008-0.002 0.017-0.005 0.025-0.007 0.022-0.007 0.044-0.015 0.066-0.023 0.003-0.001 0.007-0.002 0.010-0.004 0.025-0.010 0.049-0.022 0.073-0.034 0.007-0.004 0.014-0.008 0.021-0.011 0.017-0.009 0.034-0.019 0.050-0.030 0.008-0.005 0.016-0.010 0.023-0.015 0.016-0.011 0.031-0.022 0.046-0.034 0.007-0.005 0.014-0.010 0.020-0.016 0.021-0.018 0.042-0.036 0.062-0.056l2.576-2.576c0.020-0.021 0.042-0.040 0.064-0.058 0.007-0.006 0.015-0.011 0.022-0.017 0.015-0.012 0.030-0.023 0.046-0.034 0.009-0.006 0.018-0.012 0.027-0.017 0.015-0.009 0.029-0.018 0.045-0.026 0.010-0.005 0.020-0.011 0.030-0.016 0.015-0.008 0.030-0.015 0.046-0.021 0.010-0.004 0.020-0.009 0.031-0.013 0.016-0.006 0.032-0.012 0.049-0.017 0.010-0.003 0.020-0.007 0.030-0.010 0.018-0.005 0.037-0.010 0.055-0.014 0.008-0.002 0.016-0.004 0.024-0.006 0.027-0.005 0.054-0.009 0.081-0.012 0.004-0 0.007-0 0.011-0.001 0.024-0.002 0.047-0.003 0.071-0.003 0.020-0 0.040 0 0.060 0.002 0.003 0 0.006 0 0.010 0 0.024 0.002 0.047 0.004 0.071 0.008 0.007 0.001 0.014 0.003 0.021 0.004 0.017 0.003 0.033 0.006 0.049 0.010 0.009 0.002 0.017 0.004 0.026 0.007 0.015 0.004 0.029 0.008 0.044 0.013 0.009 0.003 0.018 0.006 0.027 0.009 0.014 0.005 0.029 0.011 0.043 0.017 0.008 0.004 0.017 0.007 0.025 0.011 0.015 0.007 0.030 0.014 0.045 0.022 0.007 0.004 0.014 0.007 0.021 0.011 0.022 0.012 0.043 0.025 0.064 0.039l1.687 1.125c0.026 0.017 0.052 0.032 0.080 0.047 0.006 0.003 0.013 0.007 0.019 0.010 0.027 0.013 0.054 0.026 0.082 0.036 0.003 0.001 0.006 0.002 0.009 0.003 0.026 0.010 0.052 0.018 0.079 0.025 0.007 0.002 0.013 0.004 0.020 0.005 0.029 0.007 0.058 0.013 0.087 0.017 0.005 0.001 0.010 0.001 0.015 0.002 0.026 0.003 0.052 0.005 0.078 0.006 0.006 0 0.012 0.001 0.019 0.001 0.004 0 0.008 0 0.012 0 0.026 0 0.052-0.001 0.079-0.004 0.006-0.001 0.012-0.002 0.018-0.002 0.025-0.003 0.050-0.006 0.074-0.011 0.008-0.002 0.017-0.003 0.025-0.005 0.030-0.007 0.060-0.014 0.089-0.024l0.867-0.289c0.028-0.009 0.056-0.017 0.084-0.023 0.009-0.002 0.017-0.003 0.026-0.005 0.020-0.004 0.041-0.007 0.061-0.010 0.009-0.001 0.018-0.002 0.027-0.003 0.024-0.002 0.048-0.004 0.072-0.004 0.004-0 0.008-0 0.012-0 0.028-0 0.056 0.001 0.084 0.004 0.008 0.001 0.016 0.002 0.024 0.003 0.020 0.002 0.040 0.005 0.059 0.009 0.010 0.002 0.019 0.004 0.029 0.006 0.018 0.004 0.036 0.009 0.054 0.014 0.009 0.003 0.018 0.005 0.027 0.008 0.020 0.006 0.040 0.014 0.059 0.022 0.006 0.003 0.012 0.005 0.018 0.007 0.025 0.011 0.050 0.023 0.074 0.036 0.006 0.003 0.012 0.007 0.017 0.010 0.018 0.010 0.036 0.021 0.054 0.033 0.008 0.005 0.016 0.011 0.023 0.016 0.015 0.011 0.030 0.022 0.045 0.034 0.008 0.006 0.015 0.012 0.022 0.019 0.015 0.013 0.030 0.027 0.044 0.041 0.006 0.006 0.011 0.011 0.017 0.017 0.019 0.020 0.038 0.041 0.055 0.063 0.003 0.003 0.005 0.007 0.008 0.011 0.014 0.019 0.028 0.038 0.041 0.058 0.005 0.008 0.010 0.016 0.015 0.024 0.010 0.017 0.020 0.034 0.029 0.051 0.005 0.009 0.009 0.018 0.014 0.027 0.009 0.018 0.017 0.037 0.024 0.056 0.003 0.008 0.007 0.017 0.010 0.025 0.010 0.028 0.019 0.056 0.027 0.085 0.050 0.189 0.090 0.381 0.122 0.575 0.053 0.325 0.080 0.659 0.080 0.998 0 0.867-0.179 1.692-0.501 2.442-0.032 0.075-0.066 0.149-0.101 0.223-0.175 0.367-0.386 0.714-0.627 1.037-0.049 0.066-0.1 0.131-0.152 0.195-0.363 0.449-0.788 0.846-1.261 1.179-0.252 0.177-0.518 0.336-0.796 0.475-0.069 0.035-0.14 0.068-0.21 0.1-0.142 0.064-0.286 0.123-0.433 0.177-0.221 0.081-0.447 0.149-0.679 0.204-0.463 0.111-0.946 0.169-1.442 0.169-1.324 0-2.552-0.417-3.56-1.126-0.203-0.143-0.397-0.297-0.581-0.462-0.245-0.22-0.473-0.46-0.681-0.716-0.052-0.064-0.103-0.129-0.152-0.195-0.048-0.065-0.095-0.13-0.141-0.197-0.183-0.266-0.346-0.547-0.486-0.841-0.21-0.441-0.37-0.91-0.472-1.4-0.085-0.408-0.13-0.831-0.13-1.265 0-0.123 0.004-0.246 0.011-0.367 0.002-0.028 0.005-0.055 0.009-0.081zM26.222 25.761c-0.025 0.026-0.052 0.052-0.081 0.079-0.325 0.307-0.786 0.604-1.358 0.876-0.104 0.049-0.212 0.098-0.323 0.146s-0.226 0.094-0.344 0.14c-0.059 0.023-0.119 0.045-0.179 0.068-0.254 0.094-0.522 0.182-0.801 0.266-1.957 0.584-4.501 0.913-7.135 0.913-1.881 0-3.717-0.168-5.325-0.476-0.080-0.015-0.16-0.031-0.24-0.047-0.872-0.177-1.673-0.397-2.372-0.654-0.424-0.156-0.809-0.326-1.147-0.504-0.29-0.153-0.545-0.313-0.762-0.476-0.108-0.082-0.207-0.165-0.296-0.249-0.114-0.108-0.202-0.208-0.271-0.301-0.052-0.070-0.092-0.136-0.124-0.198-0.021-0.041-0.038-0.081-0.053-0.119-0.049-0.132-0.059-0.242-0.059-0.33 0-1.955 0.524-3.83 1.504-5.465 0.178-0.297 0.372-0.586 0.58-0.867 0.052-0.070 0.105-0.14 0.159-0.209 0.269-0.345 0.562-0.675 0.876-0.989 0.121-0.121 0.245-0.239 0.37-0.353 0.189-0.172 0.382-0.336 0.581-0.492 0.132-0.104 0.267-0.205 0.404-0.303 0.068-0.049 0.137-0.097 0.206-0.144 0.020-0.014 0.040-0.026 0.061-0.038 0.007-0.004 0.014-0.007 0.021-0.011 0.014-0.008 0.028-0.015 0.042-0.022 0.009-0.004 0.017-0.007 0.026-0.011 0.013-0.006 0.026-0.011 0.039-0.016 0.009-0.004 0.019-0.007 0.028-0.010 0.013-0.004 0.025-0.009 0.038-0.013 0.010-0.003 0.020-0.005 0.030-0.008 0.012-0.003 0.025-0.007 0.038-0.009 0.010-0.002 0.021-0.004 0.031-0.006 0.012-0.002 0.025-0.005 0.037-0.006 0.010-0.001 0.021-0.002 0.031-0.004 0.012-0.001 0.025-0.003 0.037-0.003 0.011-0.001 0.021-0.001 0.032-0.001 0.012-0 0.024-0.001 0.036-0.001s0.026 0.001 0.038 0.002c0.011 0.001 0.022 0.001 0.033 0.002 0.013 0.001 0.025 0.003 0.038 0.005 0.011 0.001 0.022 0.003 0.033 0.005 0.013 0.002 0.025 0.005 0.038 0.008 0.011 0.002 0.021 0.004 0.032 0.007 0.013 0.003 0.025 0.007 0.038 0.011 0.010 0.003 0.021 0.006 0.031 0.010 0.013 0.004 0.025 0.010 0.038 0.015 0.010 0.004 0.020 0.007 0.029 0.012 0.013 0.006 0.026 0.012 0.039 0.019 0.009 0.004 0.018 0.008 0.027 0.013 0.014 0.008 0.028 0.016 0.042 0.025 0.007 0.004 0.014 0.008 0.021 0.013 0.021 0.014 0.041 0.028 0.061 0.043 0.254 0.197 0.52 0.38 0.797 0.546s0.565 0.316 0.863 0.448c0.992 0.44 2.090 0.685 3.245 0.685v0 0c0.347 0 0.688-0.022 1.023-0.065 0.112-0.014 0.223-0.031 0.333-0.050 0.551-0.094 1.082-0.244 1.588-0.445 0.101-0.040 0.201-0.082 0.301-0.126 0.595-0.264 1.152-0.599 1.66-0.993 0.020-0.015 0.040-0.030 0.061-0.043 0.007-0.004 0.014-0.008 0.020-0.012 0.014-0.009 0.028-0.017 0.043-0.025 0.009-0.005 0.017-0.008 0.026-0.013 0.013-0.007 0.026-0.013 0.040-0.019 0.009-0.004 0.019-0.008 0.029-0.011 0.013-0.005 0.026-0.010 0.039-0.015 0.010-0.003 0.020-0.006 0.030-0.009 0.013-0.004 0.026-0.008 0.039-0.011 0.010-0.003 0.021-0.005 0.031-0.007 0.013-0.003 0.026-0.006 0.039-0.008 0.011-0.002 0.021-0.003 0.032-0.005 0.013-0.002 0.026-0.004 0.039-0.005 0.011-0.001 0.022-0.002 0.033-0.002 0.013-0.001 0.026-0.001 0.038-0.002s0.024 0 0.036 0.001c0.011 0 0.021 0.001 0.032 0.001 0.012 0.001 0.025 0.002 0.037 0.003 0.010 0.001 0.021 0.002 0.031 0.003 0.013 0.002 0.025 0.004 0.037 0.006 0.010 0.002 0.020 0.004 0.030 0.006 0.013 0.003 0.025 0.006 0.038 0.009 0.010 0.003 0.020 0.005 0.029 0.008 0.013 0.004 0.025 0.008 0.038 0.013 0.009 0.003 0.019 0.006 0.028 0.010 0.013 0.005 0.026 0.011 0.039 0.017 0.008 0.004 0.017 0.007 0.025 0.011 0.014 0.007 0.028 0.014 0.042 0.022 0.007 0.004 0.014 0.007 0.021 0.011 0.021 0.012 0.041 0.024 0.061 0.038 0.554 0.376 1.077 0.808 1.561 1.292 0.189 0.189 0.369 0.383 0.542 0.583 0.058 0.067 0.114 0.134 0.17 0.202 0.167 0.203 0.326 0.412 0.477 0.626 0.452 0.641 0.828 1.325 1.126 2.042 0.066 0.159 0.128 0.32 0.186 0.483 0.407 1.138 0.619 2.35 0.619 3.594 0 0.188-0.046 0.479-0.426 0.869z"/>
<path d="M22.908 21.663c-0.092-0.111-0.21-0.2-0.344-0.257-0.081-0.034-0.168-0.057-0.258-0.066-0.030-0.003-0.061-0.005-0.092-0.005h-5.313c-0.497 0-0.9 0.403-0.9 0.9v1.756c0 0.497 0.403 0.9 0.9 0.9h5.313c0.031 0 0.062-0.002 0.092-0.005 0.091-0.009 0.178-0.032 0.258-0.066 0.135-0.057 0.253-0.146 0.344-0.257 0.037-0.044 0.069-0.093 0.097-0.144 0.069-0.128 0.109-0.274 0.109-0.429v-1.756c0-0.155-0.039-0.302-0.109-0.429-0.028-0.051-0.060-0.099-0.097-0.144z"/>
</g>
    </svg>
  );
}

export default EmployeeIcon;

