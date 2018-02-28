<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 64 64"
    :height="size"
    :width="size"
    :style="{ verticalAlign: 'middle' }"
  >
    <path :d="particleData" />
  </svg>
</template>
<script>
  import iconsData from 'presslabs-particles-icons/dist/icons/particles-data.json'

  export default {
    props: {
      size: {
        type: Number,
        default: 24
      },
      name: {
        type: String,
        required: true,
        default: 24
      }
    },
    computed: {
      particleData: function() {
        const name = this.name.replace(/_/g, '-')
        if (typeof (iconsData[name]) == "undefined") {
          console.error('Particle not found! Particle content must be a string and not contain any other HTML tags')
        }
        return iconsData[name]
      }
    },
  }
</script>
