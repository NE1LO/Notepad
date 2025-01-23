<template>
  <li class="flex justify-between p-4 bg-gray-900 w-full rounded-lg mb-3">
    <p class="text-color-white">{{ task }}</p>
    <button class="bg-red-500 text-white" @click="deleteTask">Delete</button>
  </li>
</template>
<script>
export default {
  props: {
    task: String,
    index: Number,
  },
  methods: {
    deleteTask() {
      this.$emit('delete-task', this.index)
    },
  },
}
</script>
<style></style>
