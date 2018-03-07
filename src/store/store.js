import Vue from "vue";
import Vuex from "vuex";
import Todo from "../models/Todo.model.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      new Todo("fitst todo from father"),
      new Todo("second todo from father"),
      new Todo("third todo from father"),
      new Todo("last todo from father"),
      new Todo("Added now")
    ],
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
    insertNewTodo(state, todo){
        state.todos.push(todo);
    }
  }
});
