<template>
  <div>
    <Header />
    <NotesList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NotesList from "./components/TasksList.vue";

export default {
  components: {
    Header,
    NotesList,
  },
};
</script>

<style></style>
