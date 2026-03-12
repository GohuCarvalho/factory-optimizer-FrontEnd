<template>

<div class="table-wrapper">

<table class="table">

<thead>
<tr>

<th v-for="column in columns" :key="column.key">
  {{ column.label }}
</th>

<th v-if="$slots.actions">
  Actions
</th>

</tr>
</thead>

<tbody>

<tr v-if="data.length === 0">
<td :colspan="columns.length + ($slots.actions ? 1 : 0)" class="empty">
No data available
</td>
</tr>

<tr v-for="(row, index) in data" :key="index">

<td v-for="column in columns" :key="column.key">
  {{ row[column.key] }}
</td>

<td v-if="$slots.actions">

<slot name="actions" :row="row" />

</td>

</tr>

</tbody>

</table>

</div>

</template>

<script setup>

defineProps({
  columns: Array,
  data: {
    type: Array,
    default: () => []
  }
})

</script>

<style scoped>

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: var(--verde-primario);
  color: white;
  padding: 10px;
}

td {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

tr:hover {
  background: #f5f5f5;
}

.empty {
  text-align: center;
  padding: 20px;
  color: #999;
}

</style>