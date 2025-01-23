<template>
  <div class="mt-8 w-full">
    <div class="flex w-full justify-center gap-4 h-10">
      <input v-model="newTask" class="p-2 w-1/2" placeholder="Text of task" />
      <button class="bg-blue-500 h-full" @click="handleAddTask">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    handleAddTask() {
      if (this.newTask.trim()) {
        this.$emit('add-task', this.newTask.trim())
        this.newTask = ''
      }
    },
  },
}
</script>

<style></style>
