<template>
<div class="card">

<div class="label">
{{ label }}
</div>

<div class="value">
{{ value }}
</div>

</div>
</template>

<script setup>

defineProps({
label: String,
value: [String, Number]
})

</script>

<style scoped>

.card{
background:#fff;
padding:20px;
border-radius:8px;
box-shadow:0 2px 6px rgba(0,0,0,0.1);
}

.label{
font-size:14px;
color:#777;
}

.value{
font-size:28px;
font-weight:bold;
margin-top:5px;
}

</style>