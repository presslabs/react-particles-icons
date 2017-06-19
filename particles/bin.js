import React from 'react'

const BinIcon = (props) => {
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

<path d="M23.91 10.575h-15.82c-0.528 0-0.943 0.452-0.897 0.978l1.622 17.851c0.040 0.465 0.43 0.822 0.897 0.822h12.576c0.467 0 0.857-0.357 0.897-0.822l1.622-17.851c0.046-0.526-0.369-0.978-0.897-0.978zM20.644 28.427h-9.287c-0.466 0-0.855-0.355-0.897-0.819l-1.295-14.249c-0.048-0.527 0.367-0.982 0.897-0.982h11.876c0.529 0 0.945 0.455 0.897 0.982l-1.295 14.249c-0.042 0.464-0.431 0.819-0.897 0.819z"/>
<path d="M12.443 26.682c0.497 0 0.9-0.403 0.9-0.9v-10.671c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9v10.671c0 0.497 0.403 0.9 0.9 0.9z"/>
<path d="M16 26.682c0.497 0 0.9-0.403 0.9-0.9v-10.671c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9v10.671c0 0.497 0.403 0.9 0.9 0.9z"/>
<path d="M19.557 26.682c0.497 0 0.9-0.403 0.9-0.9v-10.671c0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9v10.671c0 0.497 0.403 0.9 0.9 0.9z"/>
<path d="M24.791 5.318h-2.010l-1.281-2.561c-0.307-0.614-0.924-0.995-1.611-0.995h-7.779c-0.686 0-1.304 0.381-1.611 0.995l-1.281 2.561h-2.010c-0.547 0-0.99 0.403-0.99 0.9v2.657c0 0.497 0.443 0.9 0.99 0.9h17.582c0.547 0 0.99-0.403 0.99-0.9v-2.656c0-0.497-0.443-0.9-0.99-0.9zM12.378 3.562l7.243-0c0.164 0 0.314 0.093 0.388 0.24v0c0.144 0.288-0.065 0.627-0.388 0.627h-7.244c-0.322 0-0.532-0.339-0.388-0.627v0c0.073-0.147 0.223-0.24 0.388-0.24zM23.553 7.975h-15.106c-0.236 0-0.428-0.191-0.428-0.428v0c0-0.236 0.191-0.428 0.428-0.428h15.106c0.236 0 0.428 0.191 0.428 0.428v0c0 0.236-0.192 0.428-0.428 0.428z"/>
</g>
    </svg>
  )
}

export default BinIcon

