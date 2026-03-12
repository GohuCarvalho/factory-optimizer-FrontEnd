<template>

<div v-if="visible" class="toast">
{{ message }}
</div>

</template>

<script setup>

import { ref } from "vue"

const visible = ref(false)
const message = ref("")

function show(msg){

message.value = msg
visible.value = true

setTimeout(()=>{
visible.value = false
},3000)

}

defineExpose({ show })

</script>

<style scoped>

.toast{
position:fixed;
bottom:20px;
right:20px;

background:#2ecc71;
color:white;

padding:12px 20px;
border-radius:6px;

box-shadow:0 2px 10px rgba(0,0,0,0.2);
}

</style>