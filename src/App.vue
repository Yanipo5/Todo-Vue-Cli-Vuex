<template>
  <div id="app">
    <The-Header/>
    <The-Body/>
  </div>
</template>

<script>
import store from "./store/store";
import TheHeader from "./components/TheHeader.vue";
import TheBody from "./components/TheBody.vue";

/**
 * @description This component serve as main app entery point
 * */
export default {
  store,
  name: "app",
  components: {
    TheHeader,
    TheBody
  }
};
</script>

<style>
:root {
  --main-width: 500px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: var(--main-width);
  max-width: 98%;
  margin: auto;
  margin-top: 35px;
  padding: 5px;
  border: 1px solid grey;
  transition: margin 0.1s ease-in;
  -webkit-transition: margin 0.1s ease-in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media (max-width: 500px) {
  #app {
    margin-top: 0px;
  }
}
</style>
