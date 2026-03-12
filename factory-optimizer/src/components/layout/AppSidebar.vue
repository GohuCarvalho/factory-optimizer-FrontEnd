<template>

<aside :class="['sidebar', { collapsed }]">

<div class="header">

<h2 v-if="!collapsed">Factory</h2>

<button @click="toggle">
☰
</button>

</div>

<nav>

<button
v-for="item in menu"
:key="item.route"
:class="{ active: route.path === item.route }"
@click="navigate(item.route)"
>

<span class="icon">{{ item.icon }}</span>

<span v-if="!collapsed">
{{ item.label }}
</span>

</button>

</nav>

</aside>

</template>

<script setup>

import { useRouter, useRoute } from "vue-router"
import { ref } from "vue"

const router = useRouter()
const route = useRoute()

const collapsed = ref(false)

function toggle() {
  collapsed.value = !collapsed.value
}

function navigate(path) {
  router.push(path)
}

const menu = [
  { label: "Dashboard", route: "/", icon: "🏭" },
  { label: "Products", route: "/products", icon: "📦" },
  { label: "Raw Materials", route: "/materials", icon: "🧱" }
]

</script>

<style scoped>

.sidebar {
  width: 240px;
  height: 100vh;
  background: white;
  border-right: 1px solid #eee;
  padding: 16px;
  transition: 0.3s;
}

.sidebar.collapsed {
  width: 80px;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

button {
  border: none;
  background: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
}

button.active {
  background: var(--verde-primario);
  color: white;
}

</style>