<template>
    <div class="container">
        <AddNewTodo />
        <FilterTodos />
    </div>
</template>

<script>
import AddNewTodo from "./AddNewTodo";
import FilterTodos from "./FilterTodos";

/**
 * @description this component serve a container for control items
 */
export default {
  name: "TodoControls",
  components: {
    AddNewTodo,
    FilterTodos
  }
};
</script>

<style scoped>
.container {
  display: flex;
  margin: auto;
  flex-direction: column;
  width: var(--main-width);
  max-width: 100%;
}
</style>