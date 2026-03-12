import { ref } from "vue"

const toastRef = ref(null)

export function useToast(){

function setToast(ref){
toastRef.value = ref
}

function showToast(message){

toastRef.value?.show(message)

}

return{
setToast,
showToast
}

}