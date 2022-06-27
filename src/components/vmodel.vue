<template>
   <button @click="changeValue">change value</button>
   {{modelValue}}
   {{title}}
</template>

<script lang="ts" setup>
import {watch} from 'vue'
//直接导出props内部对象
const props = defineProps({
    modelValue:String,
    title:String
})
const emits = defineEmits(['update:modelValue','title','update:title'])

const changeValue = ():void=>{
    emits('update:modelValue',Math.random()+'')
    emits('update:title',Math.random()+'')
    emits('title',Math.floor(Math.random())+'')
}
watch(()=>props.modelValue,()=>{
    console.log('watch Change');
    
})
</script>
<style scoped lang="less">
</style>