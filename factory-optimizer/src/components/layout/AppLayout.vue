<template>

<div class="layout">

<AppSidebar />

<main class="content">

<router-view />

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
}

</style>