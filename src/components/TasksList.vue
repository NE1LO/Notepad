<template>
  <div class="flex items-center flex-col">
    <CreateTask @add-task="addTask" />
    <ul v-if="tasks.length" class="mt-4 flex items-center flex-col w-full">
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :index="index"
        :task="task"
        @delete-task="deleteTask"
      />
    </ul>
    <div
      v-else=" "
      class="flex justify-center items-center w-full h-36 bg-neutral-700 rounded-2xl mt-4 p-4"
    >
      <h2 class="text-2xl">Sorry, but you don't have any notes</h2>
    </div>
  </div>
</template>

<script>
import CreateTask from './CreateTask.vue'
import TaskItem from './TaskItem.vue'

export default {
  components: {
    CreateTask,
    TaskItem,
  },
  data() {
    return {
      tasks: [],
      newTask: '',
    }
  },
  methods: {
    addTask(newTask) {
      if (newTask.trim()) {
        this.tasks.push(newTask.trim())
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
  },
}
</script>

<style></style>
