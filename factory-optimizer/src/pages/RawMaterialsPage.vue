<template>

<div class="page">

<h1>Raw Materials</h1>

<div class="form">

<BaseInput
label="Material Name"
placeholder="Enter material name"
v-model="material.name"
/>

<BaseInput
label="Stock Quantity"
type="number"
placeholder="Enter quantity"
v-model="material.stockQuantity"
/>

<BaseButton
:loading="loading"
@click="createMaterial"
>
Add Material
</BaseButton>

</div>

<BaseTable
:columns="columns"
:data="materials"
>

<template #actions="{ row }">

<BaseButton @click="deleteMaterial(row)">
Delete
</BaseButton>

</template>

</BaseTable>

</div>

</template>

<script setup>

import { ref, onMounted } from "vue"

import BaseInput from "../components/base/BaseInput.vue"
import BaseButton from "../components/base/BaseButton.vue"
import BaseTable from "../components/base/BaseTable.vue"

import { useToast } from "@/composables/useToast"

import {
getRawMaterials,
createRawMaterial,
deleteRawMaterial
} from "../services/rawMaterialService"

const materials = ref([])

const material = ref({
name: "",
stockQuantity: ""
})

const loading = ref(false)

const { showToast } = useToast()

const columns = [
{ key: "name", label: "Name" },
{ key: "stockQuantity", label: "Quantity" }
]

async function loadMaterials() {

const response = await getRawMaterials()

materials.value = response.data

}

async function createMaterial(){

if(!material.value.name || !material.value.stockQuantity){

showToast("Fill all fields")

return

}

loading.value = true

try{

await createRawMaterial(material.value)

showToast("Material created successfully")

material.value = {
name:"",
stockQuantity:""
}

await loadMaterials()

}catch(error){

console.error(error)

showToast("Error creating material")

}finally{

loading.value = false

}

}

async function deleteMaterial(row){

try{

await deleteRawMaterial(row.id)

showToast("Material deleted")

await loadMaterials()

}catch(error){

console.error(error)

showToast("Error deleting material")

}

}

onMounted(()=>{
loadMaterials()
})

</script>

<style scoped>

.page{
max-width:900px;
}

h1{
margin-bottom:20px;
}

.form{
max-width:400px;
margin-bottom:40px;
}

</style>