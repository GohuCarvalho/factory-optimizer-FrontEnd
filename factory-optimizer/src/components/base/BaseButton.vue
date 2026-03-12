<template>
  <button
    class="btn"
    :class="size"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>

defineProps({
  size: {
    type: String,
    default: "medium"
  },
  disabled: Boolean
})

const emit = defineEmits(["click"])

function handleClick(event) {
  emit("click", event)
}

</script>

<style scoped>

.btn {
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  background-color: #01a998;
  color: white;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.small {
  width: 120px;
}

.medium {
  width: 180px;
}

.large {
  width: 260px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

</style>