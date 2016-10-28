import React from 'react';

const CameraIcon = (props) => {
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
<path d="M27.532 7.085v0c-0.095 0-0.178-0.065-0.201-0.157l-0.336-1.343c-0.301-1.205-1.379-2.046-2.621-2.046h-6.080c-1.24 0-2.32 0.844-2.621 2.046l-0.204 0.818c-0.1 0.401-0.46 0.682-0.874 0.682h-5.688c-0.497 0-0.9-0.403-0.9-0.9v-0.83c0-0.485-0.373-0.902-0.857-0.925-0.517-0.024-0.944 0.388-0.944 0.899v0.856c0 0.497-0.403 0.9-0.9 0.9h-0.839c-1.492 0-2.701 1.209-2.701 2.701v14.205c0 1.492 1.209 2.701 2.701 2.701h23.065c1.492 0 2.701-1.209 2.701-2.701v-14.205c0-1.492-1.209-2.701-2.701-2.701zM17.422 6.023c0.1-0.401 0.46-0.682 0.874-0.682h6.080c0.413 0 0.773 0.281 0.873 0.682v0c0.135 0.54-0.273 1.063-0.83 1.063h-6.168c-0.556 0-0.965-0.523-0.83-1.063zM28.433 23.992c0 0.497-0.403 0.9-0.9 0.9h-23.065c-0.497 0-0.9-0.403-0.9-0.9v-9.748c0-0.497 0.403-0.9 0.9-0.9h4.158c0.582 0 1.010 0.544 0.875 1.11-0.129 0.542-0.192 1.11-0.179 1.694 0.079 3.639 3.103 6.567 6.743 6.532 3.654-0.035 6.616-3.018 6.616-6.68 0-0.531-0.062-1.047-0.18-1.542-0.135-0.567 0.286-1.114 0.869-1.114h4.163c0.497 0 0.9 0.403 0.9 0.9v9.748zM11.12 16c0-0.979 0.291-1.891 0.79-2.656 0.512-0.786 1.244-1.415 2.108-1.801 0.606-0.27 1.276-0.422 1.982-0.422s1.376 0.152 1.982 0.422c0.864 0.386 1.596 1.015 2.108 1.801 0.499 0.765 0.79 1.677 0.79 2.656 0 2.691-2.189 4.88-4.88 4.88s-4.879-2.189-4.879-4.88zM28.433 10.687c0 0.472-0.383 0.855-0.855 0.855h-6.22c-0.236 0-0.464-0.091-0.63-0.258-1.21-1.213-2.883-1.965-4.728-1.965s-3.517 0.752-4.727 1.965c-0.166 0.167-0.395 0.258-0.63 0.258h-6.22c-0.472 0-0.855-0.383-0.855-0.855v-0.901c0-0.497 0.403-0.9 0.9-0.9h23.065c0.497 0 0.9 0.403 0.9 0.9v0.901z"/>
<path d="M16 19.212c1.771 0 3.212-1.441 3.212-3.212 0-0.497-0.403-0.9-0.9-0.9s-0.9 0.403-0.9 0.9c0 0.778-0.633 1.412-1.412 1.412-0.497 0-0.9 0.403-0.9 0.9s0.403 0.9 0.9 0.9z"/>
</g>
    </svg>
  );
}

export default CameraIcon;

