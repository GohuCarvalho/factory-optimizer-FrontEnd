<template>

<div class="layout">

<AppSidebar />

<main class="content">

<div class="page-container">

<router-view />

</div>

</main>

</div>

</template>

<script setup>

import AppSidebar from "./AppSidebar.vue"

</script>

<style scoped>

.layout {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 32px;
  background: #f5f6fa;
  overflow-y: auto;

  display: flex;
  justify-content: center;
}

.page-container {
  width: 100%;
  max-width: 1100px;
}

</style>