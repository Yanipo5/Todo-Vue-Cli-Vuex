<template>
        <input placeholder="enter new todo then click 'enter'" type="text" v-model="newTodo" @keyup.enter="addTodo(newTodo)">
</template>

<script>
import Todo from "../../models/Todo.model.js";

export default {
  name: "AddNewTodo",
  data: function() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo(todo) {
      this.$store.commit("insertNewTodo", new Todo(todo));
      this.newTodo = "";
    }
  }
};
</script>

<style scoped>

</style>