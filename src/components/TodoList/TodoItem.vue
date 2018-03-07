<template>
    <div class="todo" :title='title'>
      <div v-show="!editMode" @click="toggleEditMode(); setFoucos('todo'+index)" :style="isStrikeThrough">
        <img v-show="todo.isCompleted()" src="../../assets/v-icon.png" alt="v-sign" />
        <span> {{todo.getTxt()}} </span>
      </div>
      <input :id="'todo'+index" v-show="editMode" @mouseleave="toggleEditMode()" v-model="todo.txt"/>
      <div class="buttons">
        <a v-show="!todo.isCompleted()" @click="todo.setCompletedStatus()"> complete </a>
        <a v-show="todo.isCompleted()" @click="todo.setUncompletedStatus()"> unomplete </a>
        <a @click="deleteItem(index)"> delete </a>
      </div>
    </div>
</template>

<script>
/**
 * @argument todo: a Todo class
 * @argument index: an index
 * @description - Todo Item component.
 *
 */
export default {
  name: "TodoItem",
  props: {
    todo: Object,
    index: Number,
  },
  data: function() {
    return {
      editMode: false,
      title: "click to edit"
    };
  },
  methods: {
    deleteItem: function(index) {
      this.$store.commit("deleteTodo", index);
    },
    toggleEditMode: function() {
      this.editMode = !this.editMode;
    },
    setFoucos: id => {
      setTimeout(() => {
        document.querySelector(`#${id}`).focus();
      }, 150);
    }
  },
  computed: {
    isStrikeThrough: function() {
      if (this.todo.status === "completed") {
        return { "text-decoration": "line-through" };
      } else {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.todo {
  position: relative;
  border: 1px black solid;
  background-color: lightsalmon;
  opacity: 0.75;
  padding: 5px;
  margin-top: 5px;

  transition: all, ease-in, 0.3s;
}

.todo:hover {
  opacity: 1;
}
.buttons {
  position: absolute;
  top: 3px;
  right: 5px;
}
</style>