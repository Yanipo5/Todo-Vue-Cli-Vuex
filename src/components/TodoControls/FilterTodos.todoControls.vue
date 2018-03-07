<template>
        <input placeholder="enter text to filter todos" type="text" v-model="filter">
</template>

<script>

export default {
  name: "FilterTodos",

  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("updateFilter", value);
      }
    }
  }
};
</script>

<style scoped>

</style>