<template>
<div class="page">

<h1>Production Plan</h1>

<BaseButton
:loading="loading"
@click="generatePlan"
>
Generate Production Plan
</BaseButton>

<div v-if="plan.length" class="result">

<h2>Suggested Production</h2>

<BaseTable
:columns="columns"
:data="plan"
/>

<div class="total">

<strong>Total Revenue:</strong>

{{ totalRevenue }}

</div>

</div>

</div>
</template>

<script setup>

import { ref, computed } from "vue"

import BaseButton from "../components/base/BaseButton.vue"
import BaseTable from "../components/base/BaseTable.vue"

import api from "../services/api"

const plan = ref([])

const loading = ref(false)

const columns = [
{ key: "productName", label: "Product" },
{ key: "quantityToProduce", label: "Quantity" },
{ key: "totalValue", label: "Value" }
]

const totalRevenue = computed(() => {
return plan.value.reduce((sum, item) => sum + item.totalValue, 0)
})

async function generatePlan(){

loading.value = true

try{

const response = await api.get("/production-plan")

console.log(response.data)

plan.value = response.data

}catch(error){

console.error("Error generating plan", error)

}finally{

loading.value = false

}

}

</script>

<style scoped>

.page{
max-width:900px;

display:flex;
flex-direction:column;
gap:24px;
}

.result{
margin-top:30px;
}

.total{
margin-top:20px;
font-size:18px;
}

</style>