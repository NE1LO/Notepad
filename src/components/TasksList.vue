<template>
  <div>
    <CreateTask @add-task="addTask" />
    <ul class="mt-4 p-4 flex items-center flex-col">
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
        @delete-task="deleteTask"
      />
    </ul>
  </div>
</template>

<script>
import CreateTask from "./CreateTask.vue";
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    CreateTask,
    TaskItem,
  },
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask(newTask) {
      if (newTask.trim()) {
        this.tasks.push(newTask.trim());
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style></style>
