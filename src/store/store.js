import Vue from "vue";
import Vuex from "vuex";
import Todo from "../models/Todo.model.js";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // if exists, init todos from local storage as todo objects, else init new array.
    todos: window.localStorage.getItem("todos")
      ? JSON.parse(window.localStorage.getItem("todos")).map(todo => {
          return new Todo(todo.txt, todo.status);
        })
      : [],
    filter: ""
  },
  getters: {
    filteredTodos: state => {
      return state.todos.filter(todo => {
        return todo
          .getTxt()
          .toLowerCase()
          .includes(state.filter.toLowerCase());
      });
    }
  },
  mutations: {
    updateFilter(state, newFilter) {
      state.filter = newFilter;
    },
    insertNewTodo(state, todo) {
      state.todos.push(todo);
    }
  }
});
