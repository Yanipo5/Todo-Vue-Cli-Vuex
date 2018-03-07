<template>
    <div class="todo-container">
      <todo-item v-for="(todo, index) in todos" v-show="getTodoVisibility(todo, filter)" v-bind="{todo, index}" :key="index"/>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.TodoList.vue";

/**
 * @description this component serve a base list view for the todo items
 */
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
    /**
     * @description will toggle Todo item visibility based on store.filter. 
     * (note usage of v-show instead of filtered list, 
     * this is beacuse toggeling visibility is faster than changing the DOM whitch each new filter value)
     */
    getTodoVisibility: (todo, filter) => {
      return todo
        .getTxt()
        .toLowerCase()
        .includes(filter);
    }
  },
  watch: {
    todos: {
      /**
       * @description save the Todos state to the localStorage with each todo change
       */
      handler: function() {
        const temp = [];
        this.todos.forEach(todo => {
          const { txt, status } = todo;
          temp.push({ txt, status });
        });
        //TODO- trigger save only once typing a new todo is complete (currently save on each key type, not optimazed for performace, but un noticable for short todo lists).
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