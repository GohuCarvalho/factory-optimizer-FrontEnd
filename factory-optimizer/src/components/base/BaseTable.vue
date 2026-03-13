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

<tr v-if="!data || data.length === 0">

<td
:colspan="columns.length + ($slots.actions ? 1 : 0)"
class="empty"
>

<div class="empty-state">

<p>No records yet</p>

<span>Add your first item using the form above</span>

</div>

</td>

</tr>

<tr
v-else
v-for="(row, index) in data"
:key="row.id || index"
>

<td v-for="column in columns" :key="column.key">
{{ row[column.key] }}
</td>

<td v-if="$slots.actions" class="actions">

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

.table-wrapper{
width:100%;
overflow-x:auto;
}

.table{
width:100%;
border-collapse:collapse;
background:white;
border-radius:8px;
overflow:hidden;
box-shadow:0 2px 6px rgba(0,0,0,0.05);
}

th{
text-align:left;
padding:14px 16px;
background:#f8fafc;
font-weight:600;
font-size:14px;
color:#374151;
}

td{
padding:14px 16px;
border-top:1px solid #f1f5f9;
font-size:14px;
color:#374151;
}

tbody tr:nth-child(even){
background:#fafafa;
}

tbody tr:hover{
background:#eef2ff;
transition:background 0.15s ease;
}

.actions{
display:flex;
gap:8px;
}

.empty{
text-align:center;
padding:40px 20px;
}

.empty-state p{
font-size:16px;
font-weight:600;
color:#374151;
margin-bottom:4px;
}

.empty-state span{
font-size:14px;
color:#6b7280;
}

</style>