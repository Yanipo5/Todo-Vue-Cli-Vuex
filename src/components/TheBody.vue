<template>
  <div>
      <TodoList />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  name: "AppBody",
  components: {
    TodoList
  },
};
</script>

<style scoped>

</style>