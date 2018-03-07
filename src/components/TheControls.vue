<template>
    <div class="container">
        <input placeholder="enter text to filter todos" type="text" v-model="filter">
        <input placeholder="enter new todo then click 'enter'" type="text" v-model="newTodo" @keyup.enter="addTodo(newTodo)">
    </div>
</template>

<script>
import Todo from "../models/Todo.model.js";

export default {
  name: "AppControls",
  data: function() {
    return {
      newTodo: ""
    };
  },
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("updateFilter", value);
      }
    }
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
.container {
  display: flex;
  margin: auto;
  flex-direction: column;
  width: var(--main-width);
  max-width: 100%;
}
</style>