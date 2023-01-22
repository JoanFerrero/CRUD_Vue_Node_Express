<template>
  <ul class="list-group">
    <li
      class="list-group-item list-group-item-action p-4"
      style="cursor: pointer"
      v-for="(task, index) in tasks"
      :key="index"
      @click="$router.push(`/tasks/${task._id}`)"
    >
      {{ index + 1 }}.
      {{ task.title }}
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { getTasks } from "../services/TaskService";
  import type { Task } from "../interfaces/Task";
  export default defineComponent({
    name: "tasks-list",
    data() {
      return {
        tasks: [] as Task[],
      };
    },
    methods: {
      async loadTasks() {
        try {
          const res = await getTasks();
          console.log(res)
          this.tasks = res.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
    mounted() {
      this.loadTasks();
    },
  });
</script>