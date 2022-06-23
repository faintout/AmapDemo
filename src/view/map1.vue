<template>
   <div id="mapCom1"></div>
</template>

<script lang="ts">
import { defineComponent,ref ,reactive,toRefs,onMounted,computed,onBeforeUnmount} from 'vue'
import useAmap from '@/hooks/useAmap'
export default defineComponent({
   name:'mapCom1',
   setup(props,context){
     useAmap('mapCom1')
   }
})
</script>
<style scope lang="less">
#mapCom1{
    width: 100%;
    height: 100%;
}
</style>