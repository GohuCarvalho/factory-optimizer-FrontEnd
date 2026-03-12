<template>

<div class="input-group">

<label :for="name">
  {{ label }}
</label>

<input
  :id="name"
  :type="type"
  :placeholder="placeholder"
  :value="modelValue"
  @input="updateValue"
  :required="required"
  :disabled="disabled"
/>

<span v-if="error" class="error">
  {{ error }}
</span>

</div>

</template>

<script setup>

defineProps({
  label: String,
  name: String,
  modelValue: [String, Number],
  type: {
    type: String,
    default: "text"
  },
  placeholder: String,
  error: String,
  required: Boolean,
  disabled: Boolean
})

const emit = defineEmits(["update:modelValue"])

function updateValue(event) {
  emit("update:modelValue", event.target.value)
}

</script>

<style scoped>

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  font-weight: 600;
  margin-bottom: 4px;
}

input {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.error {
  color: red;
  font-size: 12px;
}

</style>