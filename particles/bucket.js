import React from 'react'

const BucketIcon = (props) => {
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

<path d="M26.029 19.099c-1.665 0-3.015 3.934-3.015 5.599s1.35 3.015 3.015 3.015 3.015-1.35 3.015-3.015-1.35-5.599-3.015-5.599zM26.029 26.063c-0.753 0-1.365-0.612-1.365-1.365 0-0.46 0.196-1.416 0.57-2.355 0.254-0.638 0.503-1.056 0.693-1.311 0.051-0.069 0.153-0.069 0.204 0 0.189 0.255 0.438 0.674 0.693 1.311 0.374 0.938 0.57 1.895 0.57 2.355 0 0.753-0.613 1.365-1.365 1.365z"/>
<path d="M25.655 16.715c0.024-0.432-0.138-0.856-0.444-1.162l-9.268-9.268c-0.306-0.306-0.729-0.468-1.162-0.444s-0.835 0.232-1.105 0.57l-0.164 0.205c-0.13 0.163-0.367 0.191-0.532 0.062-0.845-0.66-3.306-2.518-4.674-2.927-1.841-0.551-3.399-0.312-4.385 0.675-0.986 0.986-1.226 2.544-0.675 4.385 0.499 1.666 1.603 3.414 3.11 4.921 0.217 0.216 0.438 0.424 0.664 0.624 0.101 0.089 0.113 0.242 0.029 0.348l-3.758 4.701c-0.485 0.607-0.437 1.479 0.113 2.028l6.66 6.66c0.296 0.296 0.686 0.447 1.077 0.447 0.335 0 0.671-0.11 0.951-0.334l12.993-10.385c0.338-0.271 0.546-0.674 0.57-1.106zM4.827 8.338c-0.364-1.215-0.269-2.216 0.261-2.745 0.529-0.529 1.53-0.625 2.745-0.261 1.409 0.421 2.91 1.379 4.227 2.696v0c0.102 0.102 0.112 0.265 0.021 0.378l-3.684 4.609c-0.092 0.115-0.26 0.127-0.369 0.029-0.171-0.154-0.34-0.313-0.506-0.479-1.316-1.317-2.274-2.818-2.695-4.227zM23.611 16.886l-12.195 9.747c-0.152 0.121-0.37 0.109-0.507-0.028l-6.017-6.017c-0.137-0.137-0.149-0.356-0.028-0.507l3.51-4.391c0.081-0.101 0.225-0.126 0.334-0.056 0.849 0.543 1.72 0.956 2.57 1.21 0.648 0.194 1.261 0.29 1.826 0.29 0.276 0 0.541-0.024 0.793-0.069 0.126-0.023 0.252 0.021 0.341 0.113 0.468 0.491 1.137 0.788 1.876 0.756 1.232-0.052 2.247-1.039 2.332-2.269 0.098-1.428-1.031-2.618-2.439-2.618-1.235 0-2.255 0.916-2.42 2.105-0.025 0.179-0.17 0.317-0.351 0.325-0.436 0.020-0.938-0.051-1.484-0.214-0.641-0.192-1.301-0.495-1.955-0.893-0.131-0.079-0.162-0.256-0.066-0.376l4.882-6.108c0.142-0.177 0.406-0.192 0.567-0.032l8.465 8.465c0.158 0.16 0.144 0.425-0.034 0.567zM15.212 15.491c0-0.247 0.113-0.468 0.291-0.614 0.137-0.113 0.313-0.181 0.504-0.181 0.438 0 0.794 0.356 0.794 0.794s-0.356 0.794-0.794 0.794c-0.134 0-0.259-0.034-0.37-0.092-0.253-0.133-0.425-0.397-0.425-0.701z"/>
</g>
    </svg>
  )
}

export default BucketIcon

