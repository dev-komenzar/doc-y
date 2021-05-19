<template>
  <img class="VuetifyLogo" alt="Vuetify Logo" src="/vuetify-logo.svg" />
</template>

<script lang="ts">
import Vue from 'vue'
const environment = process.env.NODE_ENV || 'local'
const env = require(`./env/${environment}.ts`)

export default Vue.extend({
  data() {
    return {
      vuetifyLogo: require(`${env.BASE_URL}vuetify-logo.svg`),
    }
  },
})
</script>

<style>
.VuetifyLogo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
