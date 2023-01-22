<template>
  <Navbar />
  <main class="container py-5">
    <RouterView />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";
  import Navbar from "./components/Navbar.vue";
  import { RouterView } from 'vue-router'

  export default defineComponent({
    name: "App",
    components: {
      Navbar,
    },
  });
</script>

<style scoped>
</style>
