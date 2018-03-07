<template>
        <input placeholder="enter new todo then click 'enter'" type="text" v-model="newTodoText" @keyup.enter="addTodo(newTodoText)">
</template>

<script>
import Todo from "../../models/Todo.model.js";

export default {
  name: "AddNewTodo",
  data: function() {
    return {
      newTodoText: ""
    };
  },
  methods: {
    /**
     * @augments newTodoText: a new Todo text
     * */
    addTodo(newTodoText) {
      this.$store.commit("insertNewTodo", new Todo(newTodoText));
      this.newTodoText = "";
    }
  }
};
</script>

<style scoped>

</style>