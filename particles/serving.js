import React from 'react'

const ServingIcon = (props) => {
  const computedSize = props.size || '1em'
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

<path d="M28.433 15.359c-0.011-0.212-0.027-0.423-0.048-0.632-0.032-0.314-0.075-0.624-0.13-0.931-0.037-0.204-0.078-0.407-0.124-0.608-0.023-0.1-0.048-0.2-0.073-0.3-0.077-0.298-0.164-0.592-0.262-0.882-0.131-0.386-0.279-0.763-0.446-1.13-0.083-0.184-0.171-0.365-0.262-0.544-0.137-0.268-0.284-0.531-0.44-0.788-0.104-0.171-0.212-0.34-0.324-0.505-0.224-0.331-0.463-0.651-0.717-0.958-0.127-0.154-0.257-0.304-0.391-0.452-0.067-0.074-0.135-0.147-0.204-0.219-0.137-0.144-0.278-0.285-0.422-0.422-0.288-0.275-0.59-0.536-0.903-0.782-0.235-0.185-0.477-0.361-0.725-0.529-0.331-0.224-0.674-0.432-1.026-0.624-0.176-0.096-0.355-0.188-0.537-0.275-1.633-0.787-3.463-1.228-5.397-1.228s-3.764 0.441-5.397 1.228c-0.181 0.087-0.36 0.179-0.537 0.275-0.353 0.192-0.695 0.4-1.026 0.624-0.248 0.168-0.49 0.344-0.725 0.529-0.314 0.246-0.615 0.508-0.903 0.782-0.144 0.137-0.285 0.278-0.422 0.422-0.069 0.072-0.137 0.145-0.204 0.219-0.134 0.147-0.264 0.298-0.391 0.452-0.254 0.307-0.493 0.627-0.717 0.958-0.112 0.166-0.22 0.334-0.324 0.505-0.156 0.257-0.303 0.519-0.44 0.788-0.092 0.179-0.179 0.36-0.262 0.544-0.166 0.368-0.315 0.745-0.446 1.13-0.098 0.289-0.185 0.583-0.262 0.882-0.026 0.099-0.050 0.199-0.073 0.3-0.046 0.201-0.088 0.403-0.124 0.608-0.055 0.307-0.098 0.617-0.13 0.931-0.021 0.209-0.037 0.42-0.048 0.632s-0.016 0.426-0.016 0.641c0 0.645 0.049 1.278 0.143 1.896 0.031 0.206 0.068 0.41 0.11 0.613 0.104 0.507 0.238 1.002 0.401 1.484 0.122 0.362 0.261 0.716 0.415 1.061 0.051 0.115 0.104 0.23 0.159 0.343 0.131 0.272 0.272 0.539 0.422 0.799 0.1 0.174 0.204 0.345 0.312 0.513 0.028 0.044 0.057 0.087 0.085 0.13-0.005 0.017-0.009 0.035-0.014 0.052l0.058 0.015c0.067 0.101 0.136 0.201 0.206 0.3 0.636 0.895 1.388 1.702 2.233 2.4 0.154 0.127 0.31 0.25 0.47 0.37s0.322 0.235 0.488 0.347c0.414 0.28 0.846 0.535 1.293 0.764 0.089 0.046 0.18 0.091 0.27 0.134 1.633 0.787 3.463 1.228 5.397 1.228s3.764-0.441 5.397-1.228c0.091-0.044 0.181-0.088 0.27-0.134 0.447-0.229 0.879-0.485 1.293-0.764 0.166-0.112 0.328-0.228 0.488-0.347s0.317-0.243 0.47-0.37c0.845-0.698 1.597-1.505 2.233-2.4 0.116-0.163 0.228-0.328 0.335-0.497s0.212-0.34 0.312-0.513c0.15-0.261 0.291-0.527 0.422-0.799 0.055-0.113 0.108-0.228 0.159-0.343 0.154-0.346 0.292-0.7 0.415-1.061 0.163-0.482 0.298-0.977 0.401-1.484 0.041-0.203 0.078-0.407 0.11-0.613 0.094-0.618 0.143-1.251 0.143-1.896-0-0.215-0.006-0.429-0.016-0.641zM23.529 8.471c0.685 0.685 1.266 1.448 1.733 2.268 0.398 0.698-0.245 1.527-1.020 1.316-0.216-0.059-0.434-0.113-0.653-0.163-0.283-0.064-0.521-0.256-0.634-0.523-0.206-0.485-0.55-0.898-0.982-1.189-0.217-0.146-0.361-0.375-0.39-0.635-0.029-0.263-0.066-0.525-0.109-0.788-0.138-0.827 0.842-1.372 1.477-0.824 0.198 0.171 0.391 0.351 0.579 0.538zM15.1 21.335c0-0.041 0.004-0.080 0.009-0.119 0.059-0.44 0.436-0.781 0.892-0.781 0.030 0 0.060 0.002 0.089 0.005 0.455 0.045 0.812 0.429 0.812 0.896 0 0.497-0.404 0.9-0.9 0.9-0.124 0-0.242-0.025-0.349-0.070-0.321-0.135-0.547-0.452-0.551-0.82 0-0.003-0-0.006-0-0.010zM17.751 18.372c-0.215 0.331-0.624 0.478-1.004 0.368-0.237-0.069-0.488-0.106-0.747-0.106-0.043 0-0.086 0.001-0.129 0.003-0.27 0.013-0.532-0.091-0.717-0.289-0.459-0.493-0.955-0.948-1.481-1.364-0.234-0.185-0.366-0.475-0.34-0.771 0.007-0.078 0.009-0.341 0.006-0.393-0.020-0.348 0.157-0.679 0.463-0.847 1.101-0.607 2.291-1.061 3.535-1.339 0.351-0.078 0.72 0.055 0.928 0.347 0.156 0.219 0.343 0.414 0.556 0.578 0.307 0.237 0.434 0.642 0.306 1.008-0.344 0.981-0.805 1.923-1.376 2.804zM10.642 15.077c0.344 0 0.643 0.194 0.795 0.478 0.067 0.126 0.106 0.27 0.106 0.422 0 0.497-0.404 0.9-0.9 0.9s-0.9-0.404-0.9-0.9c0-0.094 0.014-0.184 0.041-0.269 0.095-0.302 0.345-0.536 0.657-0.608 0.009-0.002 0.017-0.004 0.026-0.006 0.057-0.011 0.116-0.018 0.176-0.018zM20.375 13.316c-0.253-0.026-0.474-0.158-0.621-0.35-0.116-0.152-0.186-0.341-0.186-0.546 0-0.263 0.114-0.499 0.294-0.663 0.16-0.147 0.373-0.237 0.607-0.237 0.497 0 0.9 0.404 0.9 0.9 0 0.482-0.382 0.876-0.859 0.898-0.014 0.001-0.028 0.002-0.042 0.002-0.032 0-0.063-0.002-0.093-0.005zM8.466 8.475c1.929-1.931 4.54-3.053 7.268-3.12 0.837-0.020 1.661 0.056 2.459 0.222 0.288 0.060 0.532 0.255 0.647 0.526 0.412 0.973 0.698 1.974 0.863 2.984 0.063 0.383-0.131 0.756-0.476 0.935-0.531 0.276-0.959 0.722-1.211 1.267-0.122 0.263-0.366 0.446-0.65 0.501-1.66 0.321-3.239 0.917-4.679 1.746-0.259 0.149-0.577 0.156-0.845 0.023-0.362-0.18-0.769-0.282-1.2-0.282-0.761 0-1.449 0.316-1.94 0.823-0.207 0.214-0.509 0.31-0.802 0.255-0.442-0.082-0.889-0.143-1.342-0.18-0.567-0.046-0.946-0.604-0.787-1.151 0.492-1.702 1.409-3.262 2.695-4.55zM6.469 15.975c0.291 0.025 0.579 0.061 0.865 0.108 0.338 0.056 0.616 0.301 0.71 0.63 0.018 0.064 0.039 0.128 0.062 0.19 0.105 0.288 0.063 0.608-0.117 0.856-0.211 0.291-0.413 0.59-0.604 0.898-0.432 0.695-1.489 0.513-1.651-0.289-0.098-0.486-0.178-0.963-0.239-1.363-0.087-0.578 0.392-1.080 0.975-1.030zM8.471 23.529c-0.198-0.198-0.388-0.403-0.569-0.614-0.211-0.246-0.277-0.587-0.166-0.891 0.4-1.087 0.933-2.099 1.577-3.019 0.199-0.285 0.546-0.419 0.888-0.362 0.143 0.024 0.291 0.036 0.441 0.036 0.411 0 0.8-0.092 1.149-0.257 0.313-0.148 0.685-0.095 0.952 0.125 0.219 0.181 0.432 0.369 0.637 0.566 0.283 0.271 0.361 0.693 0.189 1.046-0.173 0.356-0.271 0.755-0.271 1.177 0 0.178 0.017 0.351 0.050 0.519 0.076 0.387-0.105 0.781-0.453 0.967-1.045 0.558-2.153 0.969-3.31 1.226-0.289 0.064-0.59-0.022-0.807-0.223-0.104-0.096-0.206-0.194-0.307-0.295zM16 26.648c-1.252 0-2.472-0.215-3.616-0.627-0.443-0.16-0.46-0.783-0.024-0.961 0.725-0.296 1.427-0.65 2.104-1.060 0.221-0.134 0.487-0.161 0.734-0.084 0.254 0.079 0.523 0.122 0.802 0.122 0.001 0 0.003 0 0.004 0 0.235-0 0.442 0.151 0.502 0.378 0.047 0.174 0.095 0.363 0.121 0.477 0.086 0.389 0.15 0.781 0.195 1.175 0.034 0.3-0.194 0.567-0.496 0.577-0.108 0.003-0.217 0.005-0.326 0.005zM23.529 23.529c-1.096 1.096-2.389 1.924-3.8 2.45-0.532 0.198-1.11-0.147-1.199-0.707-0.086-0.542-0.207-1.080-0.361-1.612-0.008-0.029-0.017-0.058-0.026-0.087-0.077-0.259-0.031-0.536 0.117-0.761 0.278-0.424 0.44-0.931 0.44-1.475 0-0.196-0.021-0.387-0.061-0.571-0.055-0.256-0.001-0.522 0.153-0.733 1.015-1.39 1.774-2.936 2.258-4.561 0.075-0.253 0.252-0.467 0.494-0.572 0.42-0.183 0.785-0.47 1.062-0.829 0.222-0.288 0.589-0.425 0.941-0.336 0.892 0.227 1.754 0.546 2.579 0.953 0.295 0.146 0.49 0.437 0.507 0.766 0.009 0.182 0.014 0.365 0.014 0.548 0 2.844-1.108 5.518-3.119 7.529z"/>
</g>
    </svg>
  )
}

export default ServingIcon

