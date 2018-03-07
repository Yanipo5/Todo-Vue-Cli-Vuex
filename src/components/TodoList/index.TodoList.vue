<template>
    <div class="todo-container">
      <todo-item v-for="(todo, index) in todos" v-show="getTodoVisibility(todo, filter)" v-bind="{todo, index, deleteItem}" :key="index"/>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.TodoList.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filter() {
      return this.$store.state.filter;
    }
  },
  methods: {
    deleteItem: function(index) {
      this.todos.splice(index, 1);
    },
    getTodoVisibility: (todo, filter) => {
      return todo
        .getTxt()
        .toLowerCase()
        .includes(filter);
    }
  },
  watch: {
    todos: {
      //deep watching
      handler: function() {
        const temp = [];
        this.todos.forEach(todo => {
          const { txt, status } = todo;
          temp.push({ txt, status });
        });
        window.localStorage.setItem("todos", JSON.stringify(temp));
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.todo-container {
  margin: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 100%;
}
</style>