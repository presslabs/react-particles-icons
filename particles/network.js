import React from 'react';

const NetworkIcon = (props) => {
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
<path d="M30.059 11.148c-0.036-0.117-0.078-0.232-0.126-0.344s-0.1-0.221-0.157-0.327-0.12-0.209-0.187-0.308c-0.101-0.149-0.212-0.291-0.333-0.424-0.040-0.044-0.082-0.088-0.124-0.13-0.127-0.127-0.263-0.245-0.407-0.352-0.096-0.072-0.196-0.139-0.298-0.202s-0.209-0.12-0.318-0.173c-0.109-0.053-0.221-0.1-0.335-0.142-0.172-0.063-0.35-0.114-0.532-0.151-0.243-0.050-0.496-0.076-0.754-0.076-0.591 0-1.149 0.137-1.646 0.382-0.329 0.162-0.721 0.114-0.996-0.127 0 0-0.461-0.403-0.766-0.671-0.154-0.135-0.212-0.348-0.149-0.542l0.001-0.003c0.043-0.131 0.079-0.265 0.107-0.402 0.050-0.243 0.076-0.496 0.076-0.754 0-0.387-0.059-0.761-0.168-1.112-0.036-0.117-0.078-0.232-0.126-0.344s-0.1-0.221-0.157-0.327-0.12-0.209-0.187-0.308c-0.101-0.149-0.212-0.291-0.333-0.424-0.040-0.044-0.082-0.088-0.124-0.13-0.127-0.127-0.263-0.245-0.407-0.352-0.096-0.072-0.196-0.139-0.298-0.202s-0.209-0.12-0.318-0.173c-0.109-0.053-0.221-0.1-0.335-0.142-0.172-0.063-0.35-0.114-0.532-0.151-0.243-0.050-0.496-0.076-0.754-0.076-1.514 0-2.816 0.899-3.405 2.192-0.063 0.138-0.202 0.226-0.353 0.216l-5.842-0.365c-0.347-0.022-0.652-0.24-0.779-0.563-0.011-0.028-0.023-0.057-0.035-0.085-0.047-0.112-0.1-0.221-0.158-0.327s-0.12-0.209-0.187-0.308c-0.067-0.099-0.139-0.196-0.215-0.288s-0.157-0.181-0.241-0.266-0.173-0.165-0.266-0.241c-0.046-0.038-0.093-0.075-0.141-0.111-0.144-0.108-0.296-0.205-0.455-0.292-0.053-0.029-0.107-0.056-0.161-0.083-0.109-0.053-0.221-0.1-0.335-0.142-0.401-0.147-0.834-0.227-1.286-0.227s-0.885 0.080-1.286 0.227c-0.115 0.042-0.226 0.089-0.336 0.142-0.054 0.026-0.108 0.054-0.161 0.083-0.159 0.086-0.311 0.184-0.455 0.292-0.090 0.067-0.176 0.138-0.259 0.213-0.050 0.045-0.1 0.092-0.148 0.14-0.042 0.042-0.084 0.086-0.124 0.13-0.121 0.133-0.232 0.274-0.333 0.424-0.067 0.1-0.13 0.202-0.187 0.308s-0.11 0.215-0.158 0.327c-0.047 0.112-0.089 0.226-0.126 0.344s-0.067 0.237-0.092 0.358c-0.037 0.183-0.061 0.37-0.071 0.561-0.003 0.064-0.005 0.128-0.005 0.192v0c0 1.793 1.262 3.291 2.946 3.655 0.345 0.075 0.617 0.341 0.694 0.685l1.765 7.944c0.015 0.068-0.016 0.137-0.075 0.174-1.118 0.693-1.844 1.957-1.768 3.385 0.101 1.898 1.641 3.434 3.539 3.531 1.557 0.079 2.918-0.794 3.554-2.089 0.031-0.063 0.097-0.101 0.167-0.092l6.029 0.754c0.353 0.044 0.65 0.29 0.752 0.63 0.009 0.030 0.018 0.058 0.027 0.082 0.011 0.031 0.022 0.061 0.034 0.092 0.031 0.080 0.064 0.159 0.1 0.236 0.021 0.045 0.043 0.090 0.066 0.134 0.085 0.165 0.181 0.323 0.289 0.473 0.049 0.069 0.1 0.137 0.154 0.202 0.076 0.092 0.157 0.181 0.241 0.266s0.173 0.165 0.266 0.241c0.065 0.054 0.133 0.105 0.202 0.154 0.15 0.107 0.308 0.204 0.473 0.289 0.044 0.023 0.089 0.045 0.134 0.066 0.077 0.036 0.156 0.069 0.236 0.1 0.030 0.012 0.061 0.023 0.092 0.034 0.049 0.017 0.098 0.033 0.147 0.048 0.346 0.106 0.714 0.164 1.095 0.164 0.904 0 1.733-0.321 2.379-0.854 0.092-0.076 0.181-0.157 0.266-0.241s0.165-0.173 0.241-0.266c0.534-0.646 0.854-1.475 0.854-2.379 0-0.323-0.041-0.635-0.118-0.934-0.026-0.099-0.055-0.197-0.089-0.294-0.015-0.042-0.030-0.084-0.046-0.126-0.025-0.065-0.053-0.13-0.082-0.194-0.024-0.053-0.050-0.106-0.076-0.157-0.077-0.149-0.163-0.293-0.258-0.429-0.088-0.127-0.184-0.248-0.287-0.363-0.045-0.050-0.092-0.1-0.14-0.148-0.104-0.104-0.214-0.201-0.329-0.292-0.068-0.054-0.095-0.145-0.067-0.228l1.066-3.198c0.112-0.335 0.41-0.573 0.761-0.611 0.089-0.010 0.172-0.021 0.236-0.034 0.137-0.028 0.271-0.064 0.402-0.107 0.085-0.028 0.169-0.058 0.252-0.092 0.033-0.014 0.067-0.028 0.1-0.042 0.094-0.041 0.186-0.086 0.275-0.134 0.053-0.029 0.105-0.059 0.157-0.090 0.073-0.044 0.143-0.092 0.213-0.141 0.084-0.059 0.166-0.122 0.245-0.188 0.086-0.072 0.169-0.147 0.247-0.226s0.154-0.162 0.226-0.247c0.066-0.079 0.128-0.161 0.188-0.245 0.049-0.069 0.096-0.14 0.141-0.213 0.031-0.051 0.061-0.104 0.090-0.157 0.049-0.089 0.093-0.182 0.134-0.275 0.015-0.033 0.029-0.066 0.042-0.1 0.034-0.082 0.064-0.166 0.092-0.252 0.043-0.131 0.079-0.265 0.107-0.402 0.050-0.243 0.076-0.496 0.076-0.754 0-0.388-0.059-0.761-0.168-1.112zM23.843 14.905c0.042 0.042 0.086 0.084 0.13 0.124 0.133 0.121 0.274 0.232 0.424 0.333 0.001 0.001 0.002 0.001 0.003 0.002 0.167 0.113 0.242 0.321 0.179 0.512l-1.076 3.227c-0.024 0.072-0.095 0.118-0.171 0.11l-0.003-0c-0.070-0.007-0.127-0.059-0.142-0.127-0.111-0.525-0.562-2.671-0.737-3.502-0.041-0.196 0.053-0.395 0.23-0.489l0.596-0.313c0.177-0.093 0.392-0.057 0.531 0.086 0.013 0.013 0.025 0.025 0.038 0.038zM21.526 9.46c0.029-0.021 0.058-0.041 0.087-0.063 0.067-0.050 0.159-0.045 0.221 0.010l1.065 0.932c0.147 0.129 0.195 0.337 0.122 0.518-0.176 0.433-0.273 0.906-0.273 1.403 0 0.142 0.008 0.282 0.024 0.42 0.021 0.188-0.074 0.369-0.241 0.457v0c-0.269 0.142-0.599-0.013-0.661-0.311l-0.639-3.034c-0.016-0.075 0.017-0.151 0.083-0.191l0.001-0.001c0.073-0.044 0.143-0.091 0.213-0.14zM17.846 5.21c0.355-0.454 0.908-0.747 1.528-0.747 1.069 0 1.939 0.87 1.939 1.939 0 0.051-0.003 0.101-0.006 0.151-0.035 0.45-0.223 0.856-0.513 1.168-0.135 0.145-0.292 0.27-0.466 0.368-0.282 0.16-0.607 0.252-0.954 0.252-0.069 0-0.138-0.004-0.205-0.011-0.030-0.003-0.060-0.007-0.089-0.011-0.608-0.093-1.124-0.469-1.408-0.99-0.058-0.106-0.106-0.218-0.144-0.335-0.060-0.187-0.093-0.386-0.093-0.592 0-0.449 0.154-0.863 0.412-1.192zM6.643 7.088c-0.318 0.229-0.708 0.365-1.13 0.365-0.232 0-0.454-0.041-0.66-0.116-0.833-0.302-1.402-1.16-1.257-2.124 0.129-0.856 0.833-1.53 1.694-1.626 0.808-0.091 1.532 0.319 1.902 0.958 0.165 0.285 0.261 0.616 0.261 0.969 0 0.301-0.069 0.585-0.191 0.839-0.142 0.294-0.356 0.546-0.618 0.735zM11.007 21.237c-0.020 0.464-0.204 0.885-0.494 1.209-0.399 0.444-0.999 0.704-1.655 0.634-0.902-0.096-1.626-0.826-1.717-1.728-0.058-0.578 0.139-1.112 0.493-1.502 0.355-0.391 0.867-0.637 1.436-0.637 0.069 0 0.138 0.004 0.205 0.011 0.022 0.002 0.044 0.005 0.066 0.008 0.787 0.111 1.423 0.695 1.611 1.454 0.037 0.149 0.057 0.305 0.057 0.466 0 0.028-0.001 0.057-0.002 0.085zM10.754 17.129c-0.206 0.292-0.565 0.436-0.914 0.363-0.248-0.052-0.506-0.080-0.77-0.080h-0.001c-0.077 0-0.143-0.053-0.16-0.128l-1.713-7.707c-0.082-0.367 0.077-0.742 0.39-0.951 0.52-0.347 0.948-0.82 1.24-1.375 0.037-0.070 0.072-0.142 0.104-0.214 0.153-0.342 0.508-0.548 0.882-0.524l5.559 0.348c0.166 0.010 0.305 0.131 0.338 0.294l0.001 0.003c0.037 0.183 0.088 0.36 0.151 0.532 0.042 0.115 0.089 0.226 0.142 0.336s0.11 0.215 0.173 0.318c0.062 0.103 0.13 0.202 0.202 0.298l0.002 0.003c0.112 0.15 0.115 0.355 0.007 0.508l-5.632 7.978zM12.193 18.212l5.737-8.127c0.074-0.105 0.207-0.15 0.329-0.112l0.002 0.001c0.243 0.075 0.709 0.126 0.984 0.15 0.13 0.011 0.236 0.106 0.263 0.233l0.688 3.268c0.083 0.394-0.106 0.795-0.462 0.982 0 0-5.589 2.893-7.365 3.807-0.129 0.066-0.26-0.085-0.177-0.203zM19.68 21.286c-0.191 0.278-0.52 0.426-0.854 0.385l-5.893-0.737c-0.075-0.009-0.134-0.069-0.141-0.143-0.011-0.115-0.027-0.229-0.049-0.34-0.013-0.069 0.022-0.139 0.084-0.172l6.836-3.598c0.53-0.279 1.18 0.028 1.301 0.614l0.334 1.609c0.068 0.329-0.050 0.671-0.312 0.88-0.511 0.407-1.005 1.063-1.306 1.502zM24.864 23.075c-0.069 0.939-0.823 1.706-1.761 1.788-0.837 0.073-1.577-0.389-1.916-1.082-0.126-0.257-0.197-0.545-0.197-0.85 0-0.348 0.093-0.675 0.254-0.958 0.143-0.251 0.34-0.466 0.576-0.631 0.3-0.21 0.661-0.337 1.051-0.349 0.020-0.001 0.039-0.001 0.059-0.001 0.24 0 0.47 0.044 0.683 0.124 0.359 0.136 0.667 0.375 0.889 0.681 0.257 0.355 0.397 0.8 0.362 1.278zM27.064 14.112c-0.182 0.057-0.376 0.087-0.576 0.087-0.457 0-0.878-0.159-1.209-0.425-0.012-0.010-0.024-0.019-0.036-0.029-0.424-0.356-0.694-0.889-0.694-1.485 0-0.064 0.003-0.127 0.009-0.19 0.008-0.083 0.022-0.165 0.040-0.244 0.143-0.624 0.588-1.133 1.172-1.367 0.285-0.114 0.603-0.163 0.936-0.126 0.876 0.098 1.588 0.791 1.703 1.665 0.129 0.98-0.478 1.844-1.346 2.115z"/>
</g>
    </svg>
  );
}

export default NetworkIcon;

