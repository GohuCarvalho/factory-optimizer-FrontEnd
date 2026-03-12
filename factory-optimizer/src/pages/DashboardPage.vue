<template>

<div class="page">

<h1>Factory Dashboard</h1>

<div class="cards">

<div class="card">
<h3>Raw Materials</h3>
<p>{{ materialsCount }}</p>
</div>

<div class="card">
<h3>Products</h3>
<p>{{ productsCount }}</p>
</div>

<div class="card">
<h3>Production Value</h3>
<p>{{ productionValue }}</p>
</div>

</div>

</div>

</template>

<script setup>

import { ref, onMounted, computed } from "vue"

import { getRawMaterials } from "../services/rawMaterialService"
import { getProducts } from "../services/productService"
import api from "../services/api"

const materialsCount = ref(0)
const productsCount = ref(0)
const plan = ref([])

const productionValue = computed(() => {

if(!plan.value.length){
return "-"
}

return plan.value.reduce(
(sum,item)=>sum + item.totalValue,
0
)

})

async function loadDashboard(){

const materials = await getRawMaterials()
materialsCount.value = materials.data.length

const products = await getProducts()
productsCount.value = products.data.length

try{

const production = await api.get("/production-plan")

plan.value = production.data

}catch(error){

console.error("Error loading production plan", error)

plan.value = []

}

}

onMounted(()=>{
loadDashboard()
})

</script>

<style scoped>

.page{
max-width:900px;
}

.cards{
display:flex;
gap:20px;
margin-top:30px;
flex-wrap:wrap;
}

.card{
background:white;
padding:20px;
border-radius:8px;
box-shadow:0 2px 8px rgba(0,0,0,0.1);
min-width:180px;
flex:1;
}

.card h3{
font-size:16px;
margin-bottom:10px;
}

.card p{
font-size:28px;
font-weight:bold;
}

</style>