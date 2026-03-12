<template>

<button
:disabled="loading"
class="button"
>

<span v-if="loading">
Loading...
</span>

<span v-else>
<slot/>
</span>

</button>

</template>

<script setup>

defineProps({

loading:{
type:Boolean,
default:false
}

})

</script>

<style scoped>

.button{
padding:10px 16px;
border:none;
background:#2ecc71;
color:white;
border-radius:4px;
cursor:pointer;
}

.button:disabled{
opacity:0.6;
cursor:not-allowed;
}

</style>