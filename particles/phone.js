import React from 'react';

const PhoneIcon = (props) => {
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
<path d="M30.171 4.902c-0.022-0.086-0.051-0.17-0.085-0.251s-0.074-0.159-0.119-0.233c-0.030-0.050-0.062-0.097-0.097-0.144s-0.071-0.091-0.11-0.133c-0.329-0.362-0.805-0.59-1.333-0.59h-14.183c-0.012-0.984-0.813-1.778-1.8-1.778v0c0 0-3.422 0-3.557 0-0.276 0-0.615 0.126-0.995 0.364-0.084 0.053-0.17 0.111-0.258 0.175s-0.178 0.133-0.269 0.208c-0.091 0.075-0.184 0.154-0.277 0.239-0.047 0.042-0.094 0.086-0.141 0.131-0.095 0.090-0.191 0.185-0.288 0.285s-0.194 0.205-0.292 0.314c-0.098 0.11-0.197 0.224-0.296 0.343s-0.198 0.242-0.298 0.37c-0.398 0.511-0.796 1.094-1.179 1.737-0.096 0.161-0.191 0.326-0.284 0.494-0.14 0.253-0.278 0.514-0.412 0.782-0.179 0.358-0.351 0.731-0.515 1.115-0.041 0.096-0.082 0.193-0.121 0.291-0.080 0.196-0.158 0.394-0.233 0.596s-0.148 0.406-0.218 0.613c-0.070 0.207-0.137 0.417-0.201 0.63s-0.125 0.428-0.183 0.646c-0.087 0.327-0.167 0.659-0.238 0.997-0.065 0.309-0.124 0.623-0.175 0.941-0.153 0.953-0.239 1.941-0.239 2.954s0.086 2.001 0.239 2.954c0.051 0.318 0.11 0.631 0.175 0.941 0.071 0.338 0.151 0.67 0.238 0.997 0.058 0.218 0.119 0.433 0.183 0.646s0.131 0.423 0.201 0.63c0.070 0.207 0.143 0.412 0.218 0.613s0.153 0.4 0.233 0.596c0.040 0.098 0.080 0.195 0.121 0.291 0.164 0.385 0.337 0.757 0.515 1.115 0.134 0.269 0.272 0.53 0.412 0.782 0.094 0.168 0.188 0.333 0.284 0.494 0.383 0.644 0.782 1.226 1.179 1.737 0.099 0.128 0.199 0.251 0.298 0.37s0.198 0.233 0.296 0.343c0.098 0.11 0.196 0.214 0.293 0.314s0.193 0.195 0.288 0.285c0.047 0.045 0.095 0.089 0.141 0.131 0.094 0.085 0.186 0.165 0.277 0.239s0.181 0.144 0.269 0.208c0.088 0.064 0.174 0.122 0.258 0.175 0.379 0.238 0.718 0.364 0.994 0.364 0.135 0 3.557 0 3.557 0v0c0.987 0 1.788-0.794 1.8-1.778h14.183c0.124 0 0.246-0.013 0.363-0.037 0.088-0.018 0.174-0.042 0.256-0.073 0.055-0.020 0.109-0.043 0.162-0.068 0.079-0.038 0.154-0.081 0.226-0.13 0.024-0.016 0.047-0.033 0.071-0.050 0.046-0.035 0.091-0.071 0.133-0.11 0.32-0.291 0.535-0.695 0.581-1.149 0.006-0.061 0.009-0.122 0.009-0.184v-21.297c0-0.155-0.020-0.306-0.057-0.45zM5.891 24.706c-1.494-2.682-2.317-5.774-2.317-8.706s0.823-6.024 2.317-8.706c0.415-0.745 0.83-1.366 1.217-1.874 0.667-0.875 1.253-1.415 1.621-1.679 0.153-0.109 0.335-0.167 0.523-0.167h2.29c0.497 0 0.9 0.403 0.9 0.9v0.878l-0 1.697c0 0.504-0.414 0.91-0.917 0.9-0.169-0.003-0.363-0.006-0.589-0.010-0.020-0-0.039-0-0.059-0-0.706 0-1.387 0.206-1.968 0.587-0.167 0.109-0.326 0.232-0.475 0.37-0.667 0.617-1.074 1.456-1.146 2.362-0.091 1.146-0.15 2.217-0.18 3.239-0.015 0.512-0.022 1.012-0.022 1.503s0.008 0.991 0.022 1.503c0.030 1.022 0.089 2.093 0.18 3.239 0.072 0.906 0.479 1.745 1.146 2.362 0.149 0.138 0.308 0.261 0.475 0.37 0.582 0.381 1.263 0.587 1.969 0.587 0.020 0 0.040-0 0.059-0 0.226-0.004 0.421-0.007 0.59-0.010 0.504-0.009 0.917 0.396 0.917 0.9v2.575c0 0.497-0.403 0.9-0.9 0.9h-2.29c-0.188 0-0.37-0.058-0.523-0.167-0.368-0.264-0.955-0.805-1.621-1.68-0.387-0.508-0.802-1.128-1.217-1.873zM27.526 26.648h-12.382c-0.497 0-0.9-0.403-0.9-0.9v-1.722c0-0.404-0.133-0.777-0.358-1.077-0.069-0.092-0.147-0.178-0.232-0.256-0.043-0.039-0.087-0.076-0.133-0.11s-0.094-0.067-0.144-0.097c-0.050-0.030-0.101-0.058-0.153-0.083-0.236-0.114-0.501-0.178-0.781-0.178 0 0-0.005 0.001-0.027 0.002-0.038 0.002-0.128 0.006-0.335 0.011-0.035 0.001-0.073 0.002-0.114 0.003-0.083 0.002-0.18 0.004-0.294 0.006-0.057 0.001-0.118 0.002-0.184 0.004s-0.136 0.003-0.211 0.004c-0.113 0.002-0.236 0.004-0.371 0.006-0.010 0-0.020 0-0.030 0s-0.020-0.001-0.030-0.001c-0.014-0-0.029-0-0.043-0.001s-0.029-0.002-0.044-0.003c-0.014-0.001-0.029-0.002-0.043-0.003s-0.029-0.003-0.044-0.005c-0.014-0.002-0.028-0.003-0.042-0.005s-0.029-0.004-0.043-0.007c-0.014-0.002-0.028-0.004-0.041-0.007s-0.029-0.006-0.043-0.009c-0.014-0.003-0.027-0.006-0.041-0.009s-0.028-0.007-0.042-0.011c-0.013-0.003-0.027-0.007-0.040-0.011s-0.027-0.008-0.041-0.013c-0.013-0.004-0.026-0.008-0.039-0.013s-0.027-0.010-0.040-0.014c-0.013-0.005-0.026-0.009-0.038-0.014s-0.027-0.011-0.040-0.016c-0.012-0.005-0.025-0.010-0.037-0.016s-0.026-0.012-0.039-0.018c-0.012-0.006-0.024-0.012-0.036-0.018s-0.025-0.013-0.038-0.020c-0.012-0.006-0.024-0.012-0.035-0.019s-0.025-0.014-0.037-0.022c-0.011-0.007-0.023-0.014-0.034-0.021s-0.024-0.015-0.036-0.023c-0.011-0.007-0.022-0.015-0.033-0.022s-0.023-0.017-0.035-0.025c-0.011-0.008-0.022-0.015-0.032-0.024s-0.022-0.018-0.034-0.027c-0.010-0.008-0.021-0.016-0.031-0.025s-0.022-0.019-0.033-0.028c-0.010-0.009-0.020-0.017-0.030-0.026s-0.021-0.020-0.031-0.030c-0.010-0.009-0.019-0.018-0.029-0.028s-0.020-0.021-0.030-0.031c-0.009-0.010-0.018-0.019-0.027-0.029s-0.019-0.022-0.028-0.033c-0.009-0.010-0.017-0.020-0.026-0.030s-0.018-0.023-0.027-0.034c-0.008-0.010-0.016-0.020-0.024-0.031-0.009-0.012-0.017-0.024-0.026-0.036-0.008-0.011-0.015-0.021-0.023-0.032-0.008-0.012-0.016-0.025-0.024-0.037-0.007-0.011-0.014-0.022-0.021-0.033-0.008-0.013-0.015-0.026-0.023-0.038-0.007-0.011-0.013-0.022-0.020-0.034-0.007-0.013-0.014-0.026-0.021-0.040-0.006-0.012-0.012-0.023-0.018-0.034-0.007-0.014-0.013-0.028-0.019-0.041-0.005-0.012-0.011-0.023-0.016-0.035-0.006-0.014-0.012-0.028-0.018-0.043-0.005-0.012-0.010-0.023-0.014-0.035-0.006-0.014-0.011-0.029-0.016-0.044-0.004-0.012-0.009-0.024-0.013-0.036-0.005-0.015-0.009-0.030-0.014-0.045-0.004-0.012-0.008-0.024-0.011-0.036-0.004-0.016-0.008-0.032-0.012-0.048-0.003-0.012-0.006-0.023-0.009-0.035-0.004-0.017-0.007-0.035-0.011-0.052-0.002-0.011-0.005-0.022-0.007-0.033-0.004-0.020-0.006-0.040-0.009-0.060-0.001-0.009-0.003-0.018-0.004-0.027-0.004-0.029-0.007-0.058-0.009-0.088-0.015-0.193-0.030-0.387-0.044-0.584-0.025-0.344-0.047-0.694-0.067-1.048-0.022-0.39-0.040-0.785-0.054-1.186-0.004-0.108-0.007-0.218-0.010-0.326v-2.912c0.003-0.109 0.006-0.218 0.010-0.326 0.007-0.195 0.015-0.388 0.023-0.58 0.009-0.204 0.020-0.405 0.031-0.606 0.020-0.354 0.042-0.704 0.067-1.048 0.014-0.196 0.029-0.391 0.044-0.584 0.002-0.030 0.005-0.059 0.009-0.088 0.001-0.009 0.003-0.018 0.004-0.028 0.003-0.020 0.006-0.039 0.009-0.059 0.002-0.012 0.005-0.023 0.007-0.034 0.003-0.017 0.006-0.034 0.010-0.050 0.003-0.013 0.006-0.025 0.009-0.038 0.004-0.015 0.007-0.031 0.012-0.046 0.004-0.014 0.008-0.027 0.012-0.040s0.008-0.028 0.013-0.041c0.005-0.014 0.010-0.027 0.014-0.041s0.009-0.026 0.014-0.039c0.005-0.014 0.011-0.027 0.017-0.041 0.005-0.012 0.010-0.025 0.015-0.037 0.006-0.014 0.013-0.028 0.019-0.041 0.005-0.012 0.011-0.023 0.016-0.035 0.007-0.014 0.014-0.028 0.022-0.041 0.006-0.011 0.011-0.022 0.017-0.033 0.008-0.014 0.016-0.027 0.023-0.040 0.006-0.011 0.012-0.021 0.019-0.032 0.008-0.013 0.017-0.026 0.025-0.039 0.007-0.010 0.013-0.020 0.020-0.030 0.009-0.013 0.018-0.026 0.028-0.039 0.007-0.009 0.014-0.019 0.021-0.029 0.010-0.013 0.020-0.025 0.030-0.038 0.007-0.009 0.014-0.018 0.022-0.027 0.010-0.012 0.021-0.024 0.031-0.036 0.008-0.009 0.015-0.018 0.023-0.026 0.011-0.012 0.022-0.023 0.033-0.035 0.008-0.008 0.016-0.017 0.024-0.025 0.011-0.011 0.023-0.023 0.035-0.034 0.008-0.008 0.016-0.016 0.025-0.024 0.012-0.011 0.024-0.021 0.036-0.032 0.009-0.008 0.017-0.015 0.026-0.023 0.012-0.010 0.025-0.020 0.038-0.030 0.009-0.007 0.018-0.014 0.027-0.021 0.013-0.010 0.026-0.019 0.039-0.029 0.009-0.007 0.018-0.014 0.028-0.020 0.013-0.009 0.027-0.018 0.040-0.027 0.010-0.006 0.019-0.013 0.029-0.019 0.013-0.008 0.027-0.017 0.041-0.025 0.010-0.006 0.020-0.012 0.030-0.018 0.014-0.008 0.028-0.015 0.042-0.023 0.010-0.006 0.021-0.011 0.031-0.017 0.014-0.007 0.028-0.014 0.042-0.020 0.011-0.005 0.022-0.011 0.033-0.015 0.014-0.006 0.029-0.012 0.043-0.018 0.011-0.005 0.023-0.010 0.034-0.014 0.014-0.006 0.029-0.011 0.044-0.016 0.012-0.004 0.023-0.009 0.035-0.013 0.015-0.005 0.029-0.009 0.044-0.014 0.012-0.004 0.024-0.008 0.037-0.011 0.015-0.004 0.029-0.008 0.044-0.012 0.013-0.003 0.025-0.007 0.038-0.010 0.015-0.003 0.029-0.007 0.044-0.010 0.013-0.003 0.026-0.006 0.039-0.008 0.015-0.003 0.030-0.005 0.044-0.007 0.014-0.002 0.027-0.004 0.041-0.006 0.015-0.002 0.029-0.004 0.044-0.005s0.028-0.003 0.042-0.004c0.015-0.001 0.029-0.002 0.044-0.003s0.029-0.002 0.043-0.002c0.015-0.001 0.029-0.001 0.044-0.001 0.010-0 0.020-0.001 0.030-0.001s0.019 0 0.029 0c0 0 0 0 0 0 0.169 0.003 0.319 0.005 0.454 0.008 0.045 0.001 0.087 0.002 0.129 0.002 0.033 0.001 0.065 0.001 0.095 0.002 0.091 0.002 0.173 0.003 0.246 0.005 0.024 0.001 0.048 0.001 0.070 0.002 0.001 0 0.002 0 0.003 0 0.111 0.002 0.2 0.005 0.271 0.007 0.015 0 0.029 0.001 0.043 0.001 0.025 0.001 0.047 0.001 0.066 0.002 0.001 0 0.001 0 0.002 0 0.019 0.001 0.036 0.001 0.051 0.002 0.016 0.001 0.030 0.001 0.042 0.002 0.017 0.001 0.029 0.001 0.039 0.002 0.022 0.001 0.027 0.002 0.027 0.002 0.28 0 0.545-0.064 0.781-0.178 0.053-0.025 0.104-0.053 0.153-0.083s0.097-0.062 0.144-0.097c0.046-0.035 0.091-0.071 0.133-0.11 0.085-0.078 0.163-0.163 0.232-0.255 0.225-0.3 0.358-0.673 0.358-1.077v-1.722c0-0.497 0.403-0.9 0.9-0.9h12.382c0.497 0 0.9 0.403 0.9 0.9v19.496c0 0.497-0.403 0.9-0.9 0.9z"/>
<path d="M18.713 23.136c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M27.56 23.136c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M23.159 23.136c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M18.713 18.645c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M27.56 18.645c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M23.159 18.645c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M18.713 14.165c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M27.56 14.165c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M23.159 14.165c0 0.995-0.806 1.801-1.801 1.801s-1.801-0.806-1.801-1.801c0-0.995 0.806-1.801 1.801-1.801s1.801 0.806 1.801 1.801z"/>
<path d="M16.889 10.687h8.892c0.995 0 1.801-0.806 1.801-1.801s-0.806-1.801-1.801-1.801h-8.892c-0.995 0-1.801 0.806-1.801 1.801s0.806 1.801 1.801 1.801z"/>
</g>
    </svg>
  );
}

export default PhoneIcon;

