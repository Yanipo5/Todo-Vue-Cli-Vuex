<template>
    <div class="todo-container">
      <Todo-item v-for="(todo, index) in todos" v-bind="{todo,index, deleteItem}" :key="index"/>
    </div>
</template>

<script>
import TodoItem from "./Todo-Item.vue";
import Todo from "../models/Todo.model.js";

export default {
  name: "AppBody",
  components: {
    TodoItem
  },
  data: function() {
    return {
      todos: [
        new Todo("fitst todo from father"),
        new Todo("second todo from father"),
        new Todo("third todo from father")
      ],
    };
  },
  methods: {
    deleteItem: function(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.todo-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 100%;
}
</style>