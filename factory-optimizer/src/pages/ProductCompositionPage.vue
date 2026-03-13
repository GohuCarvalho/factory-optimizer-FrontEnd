<template>

<div class="page">

<h1>Product Composition</h1>

<div class="form">

<BaseInput
label="Product ID"
type="number"
v-model="composition.productId"
/>

<BaseInput
label="Raw Material ID"
type="number"
v-model="composition.rawMaterialId"
/>

<BaseInput
label="Quantity Required"
type="number"
v-model="composition.quantityRequired"
/>

<BaseButton
:loading="loading"
@click="createComposition"
>
Add Composition
</BaseButton>

</div>

<BaseTable
:columns="columns"
:data="compositions"
/>

</div>

</template>

<script setup>

import { ref, onMounted } from "vue"

import BaseInput from "../components/base/BaseInput.vue"
import BaseButton from "../components/base/BaseButton.vue"
import BaseTable from "../components/base/BaseTable.vue"

import { useToast } from "@/composables/useToast"
import api from "@/services/api"

const { showToast } = useToast()

const compositions = ref([])

const composition = ref({
productId:"",
rawMaterialId:"",
quantityRequired:""
})

const loading = ref(false)

const columns = [
{ key:"productId", label:"Product ID"},
{ key:"rawMaterialId", label:"Raw Material ID"},
{ key:"quantityRequired", label:"Quantity"}
]

async function loadCompositions(){

const response = await api.get("/product-compositions")

compositions.value = response.data

}

async function createComposition(){

loading.value = true

try{

await api.post("/product-compositions",composition.value)

showToast("Composition created")

composition.value = {
productId:"",
rawMaterialId:"",
quantityRequired:""
}

await loadCompositions()

}catch(error){

console.error(error)
showToast("Error creating composition")

}finally{

loading.value = false

}

}

onMounted(loadCompositions)

</script>

<style scoped>

.page{
max-width:900px;

display:flex;
flex-direction:column;
gap:24px;
}

.form{
max-width:400px;
margin-bottom:40px;
}

</style>