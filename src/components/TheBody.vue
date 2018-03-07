<template>
  <div>
    <TodoControls />
    <TodoList />
  </div>
</template>

<script>
// import TodoControls from "./TodoControls.vue";
import TodoControls from "./TodoControls/index.TodoControls.vue";
import TodoList from "./TodoList/index.TodoList.vue";

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