import React from 'react'

const EnvelopeOpenIcon = (props) => {
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

<path d="M30.228 28.007v-16.854c0-0.305-0.154-0.589-0.41-0.755l-12.863-8.352c-0.292-0.183-0.623-0.274-0.954-0.274s-0.662 0.091-0.954 0.274l-12.863 8.352c-0.256 0.166-0.41 0.45-0.41 0.755v16.854l-0.011 0.009v1.322h0.012c0.006 0.492 0.406 0.889 0.9 0.889h26.654c0.497 0 0.9-0.403 0.9-0.9v-0.446h0.011v-0.865l-0.011-0.009zM6.698 28.427c-0.851 0-1.227-1.072-0.563-1.604l9.302-7.442c0.331-0.265 0.794-0.265 1.125 0l9.302 7.441c0.665 0.532 0.289 1.604-0.563 1.604h-18.604zM22.276 20.403l4.593-4.899c0.558-0.596 1.557-0.2 1.557 0.616v8.573c0 0.755-0.873 1.175-1.463 0.703l-4.593-3.674c-0.41-0.328-0.454-0.936-0.094-1.319zM16.49 3.892l10.782 7.001c0.47 0.305 0.55 0.962 0.166 1.371l-6.669 7.114c-0.321 0.343-0.852 0.381-1.219 0.087l-1.862-1.49c-0.994-0.795-2.381-0.795-3.375 0l-1.862 1.49c-0.367 0.294-0.898 0.256-1.219-0.087l-6.669-7.114c-0.384-0.409-0.304-1.066 0.167-1.371l10.782-7.001c0.298-0.194 0.683-0.194 0.981 0zM5.131 15.504l4.593 4.899c0.359 0.383 0.316 0.991-0.094 1.319l-4.593 3.674c-0.59 0.472-1.463 0.052-1.463-0.703v-8.573c0-0.816 0.999-1.211 1.557-0.616z"/>
</g>
    </svg>
  )
}

export default EnvelopeOpenIcon

