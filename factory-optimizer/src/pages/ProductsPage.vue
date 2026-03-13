<template>

<div class="page">

<h1>Products</h1>

<div class="form">

<BaseInput
label="Product Name"
v-model="product.name"
/>

<BaseInput
label="Product Value"
type="number"
v-model="product.productValue"
/>

<BaseButton
:loading="loading"
@click="saveProduct"
>
{{ editing ? "Update Product" : "Add Product" }}
</BaseButton>

</div>

<BaseTable
:columns="columns"
:data="products"
>

<template #actions="{ row }">

<BaseButton
@click="editProduct(row)"
>
Edit
</BaseButton>

<BaseButton
variant="danger"
@click="deleteProduct(row)"
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
getProducts,
createProduct,
updateProduct,
deleteProduct as deleteProductService
} from "../services/productService"

const products = ref([])

const product = ref({
id:null,
name:"",
productValue:""
})

const editing = ref(false)

const loading = ref(false)

const { showToast } = useToast()

const columns = [
{ key:"name", label:"Name" },
{ key:"productValue", label:"Value" }
]

async function loadProducts(){

try{

const response = await getProducts()

products.value = response.data

}catch(error){

console.error(error)

showToast("Error loading products")

}

}

function editProduct(row){

product.value = {
id:row.id,
name:row.name,
productValue:row.productValue
}

editing.value = true

}

function resetForm(){

product.value = {
id:null,
name:"",
productValue:""
}

editing.value = false

}

async function saveProduct(){

if(!product.value.name || !product.value.productValue){

showToast("Fill all fields")

return

}

loading.value = true

try{

if(editing.value){

await updateProduct(product.value.id,{
name:product.value.name,
productValue:Number(product.value.productValue)
})

showToast("Product updated")

}else{

await createProduct({
name:product.value.name,
productValue:Number(product.value.productValue)
})

showToast("Product created")

}

resetForm()

await loadProducts()

}catch(error){

console.error(error)

showToast("Error saving product")

}finally{

loading.value = false

}

}

async function deleteProduct(row){

if(!confirm("Delete this product?")) return

try{

await deleteProductService(row.id)

showToast("Product deleted")

await loadProducts()

}catch(error){

console.error(error)

showToast("Error deleting product")

}

}

onMounted(async ()=>{

await loadProducts()

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

