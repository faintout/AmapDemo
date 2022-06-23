<template>
   <div id="mapCom2"></div>
</template>

<script lang="ts">
import { defineComponent,ref ,reactive,toRefs,onMounted,computed,onBeforeUnmount} from 'vue'
import useAmap from '@/hooks/useAmap'
export default defineComponent({
   name:'mapCom2',
   setup(props,context){
     useAmap('mapCom2')
   }
})
</script>
<style scope lang="less">
#mapCom2{
    width: 100%;
    height: 100%;
}
</style>