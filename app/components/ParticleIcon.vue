<template>
  <div @click="handleClick">
    <particle :size="size" :name="particleName"></particle>
  </div>
</template>

<script>
import Particle from './Particle'

export default {
  props: ['particle', 'size'],
  data: function() {
    return {
      particleName: this.particle.liga
    }
  },
  methods: {
  	handleClick() {
    	this.$emit('click')
    }
  },
  components: { Particle }
}
</script>
