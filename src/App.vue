<template>
  <girl-image></girl-image>
  <the-problems></the-problems>
  <data-input></data-input>
</template>

<script>
import DataInput from './components/DataInput.vue'
import GirlImage from './components/GirlImage.vue'
import TheProblems from './components/TheProblems.vue'

export default {
  components: {
    DataInput,
    GirlImage,
    TheProblems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
