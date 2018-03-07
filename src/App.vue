<template>
  <div id="app">
    <The-Header/>
    <The-Controls/>
    <The-Body/>
  </div>
</template>

<script>
import store from "./store/store";
import TheHeader from './components/TheHeader.vue'
import TheControls from './components/TheControls.vue'
import TheBody from './components/TheBody.vue'

export default {
  store,
  name: 'app',
  components: {
    TheHeader,
    TheControls,
    TheBody
  }
}
</script>

<style>
:root {
  --main-width: 500px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
