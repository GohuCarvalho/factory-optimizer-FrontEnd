<template>

<div class="page">

<h1>Raw Materials</h1>

<div class="form">

<BaseInput
label="Material Name"
v-model="material.name"
/>

<BaseInput
label="Stock Quantity"
type="number"
v-model="material.stockQuantity"
/>

<BaseButton
:loading="loading"
@click="saveMaterial"
>
{{ editing ? "Update Material" : "Add Material" }}
</BaseButton>

</div>

<BaseTable
:columns="columns"
:data="materials"
>

<template #actions="{ row }">

<BaseButton
@click="editMaterial(row)"
>
Edit
</BaseButton>

<BaseButton
variant="danger"
@click="deleteMaterial(row)"
>
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
updateRawMaterial,
deleteRawMaterial
} from "../services/rawMaterialService"

const materials = ref([])

const material = ref({
id:null,
name:"",
stockQuantity:""
})

const editing = ref(false)

const loading = ref(false)

const { showToast } = useToast()

const columns = [
{ key:"name", label:"Name" },
{ key:"stockQuantity", label:"Quantity" }
]

async function loadMaterials(){

try{

const response = await getRawMaterials()

materials.value = response.data

}catch(error){

console.error(error)

showToast("Error loading materials")

}

}

function editMaterial(row){

material.value = {
id:row.id,
name:row.name,
stockQuantity:row.stockQuantity
}

editing.value = true

}

function resetForm(){

material.value = {
id:null,
name:"",
stockQuantity:""
}

editing.value = false

}

async function saveMaterial(){

if(!material.value.name || !material.value.stockQuantity){

showToast("Fill all fields")

return

}

loading.value = true

try{

if(editing.value){

await updateRawMaterial(material.value.id,{
name:material.value.name,
stockQuantity:Number(material.value.stockQuantity)
})

showToast("Material updated")

}else{

await createRawMaterial({
name:material.value.name,
stockQuantity:Number(material.value.stockQuantity)
})

showToast("Material created")

}

resetForm()

await loadMaterials()

}catch(error){

console.error(error)

showToast("Error saving material")

}finally{

loading.value = false

}

}

async function deleteMaterial(row){

if(!confirm("Delete this material?")) return

try{

await deleteRawMaterial(row.id)

showToast("Material deleted")

await loadMaterials()

}catch(error){

console.error(error)

showToast("Error deleting material")

}

}

onMounted(async ()=>{

await loadMaterials()

})

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

