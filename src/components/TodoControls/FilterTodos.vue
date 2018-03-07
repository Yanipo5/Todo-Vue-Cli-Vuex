<template>
        <input placeholder="enter text to filter todos" type="text" v-model="filter">
</template>

<script>
export default {
  name: "FilterTodos",

  computed: {
    filter: {
      /**
       * @description get current filter value.
       * */
      get() {
        return this.$store.state.filter;
      },
      /**
       * @augments value: set a new filter value.
       * */
      set(value) {
        this.$store.commit("updateFilter", value);
      }
    }
  }
};
</script>

<style scoped>

</style>