<template>
  <div class="particle-card" :class="{ dark }">
    <a href="#" @click.prevent="prev" class="nav prev">
      <particle :size="24" name="arrow_w"></particle>
    </a>
    <a href="#" @click.prevent="next" class="nav next">
      <particle :size="24" name="arrow_e"></particle>
    </a>
    <a href="#" @click.prevent="toggleDark" class="action dark">
      <particle :size="24" :name="dark ? 'lightbulb_off' : 'lightbulb_on'"></particle>
    </a>
    <a href="#" @click.prevent="closeCard" class="action close">
      <particle :size="24" name="delete"></particle>
    </a>
    <h2><small>Particle name:</small>{{ camelCase(particle.liga) }}</h2>
    <table>
      <tr class="icons">
        <td>
          <particle :size="16" :name="particle.liga"></particle>
        </td>
        <td>
          <particle :size="32" :name="particle.liga"></particle>
        </td>
        <td>
          <particle :size="64" :name="particle.liga"></particle>
        </td>
        <td>
          <particle :size="96" :name="particle.liga"></particle>
        </td>
      </tr>
      <tr class="sizes">
        <td>
          <small>16px</small>
        </td>
        <td>
          <small>32px</small>
        </td>
        <td>
          <small>64px</small>
        </td>
        <td>
          <small>128px</small>
        </td>
      </tr>
    </table>

    <h4>Usage</h4>
    <pre><code>import Particle from 'react-particles-icons'

const Demo = () => {
  return (
    &lt;Particle name="{{ particle.liga }}" /&gt;
  )
}

export default Demo

</code></pre>
  </div>
</template>

<script>
import Particle from './Particle'
import ParticleIcon from './ParticleIcon'
import ParticleSvg from './ParticleSvg'
import { camelCase } from 'lodash'

export default {
  props: ['particle', 'dark'],
  data () {
    return {
      camelCase,
    }
  },
  methods: {
    toggleDark: function() {
      this.$emit('dark');
    },
    closeCard: function () {
      this.$emit('close');
    },
    next: function() {
      this.$emit('next');
    },
    prev: function() {
      this.$emit('prev');
    },
  },
  components: { ParticleIcon, ParticleSvg, Particle }
}
</script>

<style lang="scss">
@import "./variables";
@import "./colors";

.particle-card {
  text-align: left;
  background: #fff;
  color: $gray-1;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba($gray-1, .2);
  padding: 20px;
  transition: all ease .15s;
  position: sticky;
  top: 100px;
  h2 {
    margin-top: 30px;
    small {
      color: $gray-4;
      font-size: 12px;
      display: block;
      font-weight: 400;
    }
  }
  .action, .nav {
    font-size: 24px;
  }
  .icons td {
    vertical-align: bottom;
    svg {
      border: 1px solid rgba($gray-4, .2);
    }
  }
  .sizes {
    small {
      color: $gray-4;
      font-size: 12px;
    }
  }
  small {
    display: block;
  }
  code {
    font-family: "Roboto Mono", monospace;
    font-size: 12px;
    color: $red-1;
  }
  &.dark {
    background: $gray-1;
    color: #fff;
    code {
      color: $teal-1;
    }
  }
  table {
    width: 100%;
  }
  pre code {
    font-size: 12px !important;
  }
  .next, .prev, .close, .dark {
    position: absolute;
    top: 10px;
    right: 10px;
    text-decoration: none;
    color: $gray-5;
    &:hover {
      color: $secondColor;
    }
  }
  .dark {
    right: 40px;
  }
  .prev {
    right: auto;
    left: 20px;
  }
  .next {
    right: auto;
    left: 50px;
  }
  .zoom-1x {
    font-size: 16px;
  }
  .zoom-2x {
    font-size: 32px;
  }
  .zoom-4x {
    font-size: 64px;
  }
  .zoom-8x {
    font-size: 128px;
  }
}
</style>
