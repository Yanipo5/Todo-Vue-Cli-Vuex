<template>
  <div>
    <TodoControls />
    <TodoList />
  </div>
</template>

<script>
// import TodoControls from "./TodoControls.vue";
import TodoControls from "./TodoControls/Composite.TodoControls.vue";
import TodoList from "./TodoList/Composite.TodoList.vue";

/** 
 * @description This components serve the the main app body (should be used as singelton)
 */
export default {
  name: "AppBody",
  components: {
    TodoControls,
    TodoList
  }
};
</script>

<style scoped>

</style>