<script setup lang="ts">
import NavBar from './components/AppHeader.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style>
.app {
  max-width: 767px;
  margin: 0 auto;
  padding: 16px 16px 0 16px;
}
.main {
  margin: 30px 0;
}
</style>
