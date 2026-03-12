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
@click="createProduct"
>
Add Product
</BaseButton>

</div>

<BaseTable
:columns="columns"
:data="products"
>

<template #actions="{ row }">

<BaseButton @click="deleteProduct(row)">
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
  createProduct as createProductService,
  deleteProduct as deleteProductService
} from "../services/productService"

const products = ref([])

const product = ref({
  name: "",
  productValue: ""
})

const loading = ref(false)

const { showToast } = useToast()

const columns = [
  { key: "name", label: "Name" },
  { key: "productValue", label: "Value" }
]

async function loadProducts() {

  const response = await getProducts()

  products.value = response.data

}

async function createProduct(){

  if(!product.value.name || !product.value.productValue){

    showToast("Fill all fields")

    return

  }

  loading.value = true

  try{

    await createProductService(product.value)

    showToast("Product created successfully")

    product.value = {
      name:"",
      productValue:""
    }

    await loadProducts()

  }catch(error){

    console.error(error)

    showToast("Error creating product")

  }finally{

    loading.value = false

  }

}

async function deleteProduct(row){

  try{

    await deleteProductService(row.id)

    showToast("Product deleted")

    await loadProducts()

  }catch(error){

    console.error(error)

    showToast("Error deleting product")

  }

}

onMounted(()=>{
  loadProducts()
})

</script>

<style scoped>

.page{
max-width:900px;
}

.form{
max-width:400px;
margin-bottom:40px;
}

</style>