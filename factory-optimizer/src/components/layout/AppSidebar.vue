<template>

<aside :class="['sidebar', { collapsed }]">

<div class="header">

<h2 v-if="!collapsed" class="logo">
Factory Optimizer
</h2>

<button class="toggle" @click="toggle">
☰
</button>

</div>

<nav>

<button
v-for="item in menu"
:key="item.route"
:class="['menu-item', { active: route.path === item.route }]"
@click="navigate(item.route)"
:title="collapsed ? item.label : ''"
>

<span class="icon">
{{ item.icon }}
</span>

<span v-if="!collapsed" class="label">
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
  { label: "Dashboard", route: "/", icon: "📊" },
  { label: "Raw Materials", route: "/materials", icon: "🧱" },
  { label: "Products", route: "/products", icon: "📦" },
  { label: "Product Composition", route: "/product-composition", icon: "⚙️" },
  { label: "Production Plan", route: "/production-plan", icon: "📈" }
]

</script>

<style scoped>

.sidebar{
width:240px;
height:100vh;
background:white;
border-right:1px solid #e5e7eb;
padding:16px;
transition:0.25s ease;
}

.sidebar.collapsed{
width:80px;
}

.sidebar.collapsed .menu-item{
justify-content:center;
}

.icon{
font-size:18px;
min-width:20px;
text-align:center;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:30px;
}

.logo{
font-size:18px;
font-weight:700;
letter-spacing:0.5px;
color:#111827;
}

.toggle{
border:none;
background:#f3f4f6;
padding:6px 10px;
border-radius:6px;
cursor:pointer;
transition:background 0.2s;
}

.toggle:hover{
background:#e5e7eb;
}

nav{
display:flex;
flex-direction:column;
gap:6px;
}

.menu-item{
border:none;
background:none;
padding:10px 12px;
border-radius:6px;
text-align:left;
cursor:pointer;
display:flex;
align-items:center;
gap:10px;

font-size:14px;
color:#374151;

transition:background 0.15s ease, color 0.15s ease;
}

.menu-item:hover{
background:#f3f4f6;
}

.menu-item.active{
background:#2563eb;
color:white;
}

.icon{
font-size:16px;
}

.label{
white-space:nowrap;
}

</style>