<template>

<button
:disabled="loading"
:class="['button', variant]"
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
},

variant:{
type:String,
default:"primary"
}

})

</script>

<style scoped>

.button{
border:none;
padding:10px 16px;
border-radius:6px;
cursor:pointer;
font-weight:500;
font-size:14px;

transition:background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
}

.button.primary{
background:#2563eb;
color:white;
}

.button.primary:hover{
background:#1d4ed8;
}

.button.danger{
background:#dc2626;
color:white;
}

.button.danger:hover{
background:#b91c1c;
}

.button:active{
transform:scale(0.98);
}

.button:disabled{
background:#94a3b8;
cursor:not-allowed;
box-shadow:none;
}

</style>