<template>
  <div id="app">
    <App-Header/>
    <App-Controls/>
    <App-Body/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppControls from './components/AppControls.vue'
import AppBody from './components/AppBody.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppControls,
    AppBody
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
