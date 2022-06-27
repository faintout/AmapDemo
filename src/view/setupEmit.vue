<template>
{{state.mapComponent}}
{{state.title}}
   <vmodel v-model="state.mapComponent" @title="titleChange" v-model:title="state.title"></vmodel>
</template>

<script lang="ts" setup>
import vmodel from '@/components/vmodel.vue'
import { reactive,toRefs} from 'vue'
interface stateModel {
    mapComponent:string
    title:string
}
const state:stateModel = reactive({
    mapComponent:'123',
    title:'这是title'
})
const titleChange = (newVal:string):void=>{
    console.log('newVal',newVal);
}
</script>
<style scoped lang="less">
</style>