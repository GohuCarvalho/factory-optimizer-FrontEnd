<template>

<AppLayout />

<AppToast ref="toast"/>

</template>

<script setup>

import { ref, onMounted } from "vue"

import AppLayout from "./components/layout/AppLayout.vue"
import AppToast from "./components/ui/AppToast.vue"

import { useToast } from "./composables/useToast"

const toast = ref(null)

const { setToast } = useToast()

onMounted(()=>{
setToast(toast.value)
})

</script>