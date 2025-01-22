<template>
  <div class="mt-8">
    <div class="flex justify-center gap-4 h-10">
      <input v-model="newTask" class="p-2 w-1/2" placeholder="Text of task" />
      <button @click="handleAddTask" class="bg-blue-500 h-full">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    handleAddTask() {
      if (this.newTask.trim()) {
        this.$emit("add-task", this.newTask.trim());
        this.newTask = "";
      }
    },
  },
};
</script>

<style></style>
