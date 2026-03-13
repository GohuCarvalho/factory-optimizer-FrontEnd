<template>

<div class="input-group">

<label v-if="label">
{{ label }}
</label>

<input
:type="type"
:value="modelValue"
:placeholder="placeholder"
@input="$emit('update:modelValue', $event.target.value)"
/>

</div>

</template>

<script setup>

defineProps({
label: String,

modelValue: [String, Number],

type: {
type: String,
default: "text"
},

placeholder: String
})

defineEmits(["update:modelValue"])

</script>

<style scoped>

.input-group {
display: flex;
flex-direction: column;
margin-bottom: 16px;
}

input{
width:100%;
padding:10px;
border:1px solid #d1d5db;
border-radius:6px;
font-size:14px;

transition:border 0.2s ease, box-shadow 0.2s ease;
}

input:focus{
outline:none;
border-color:#2563eb;
box-shadow:0 0 0 2px rgba(37,99,235,0.2);
}

label{
display:block;
font-size:14px;
margin-bottom:5px;
font-weight:500;
color:#374151;
}

</style>