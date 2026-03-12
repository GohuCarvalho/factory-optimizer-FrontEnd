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

label {
font-weight: 600;
margin-bottom: 6px;
}

input {
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
}

</style>