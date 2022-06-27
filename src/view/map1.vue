<template>
   <div id="mapCom1"></div>
</template>

<script lang="ts" setup>
import useAmap from '@/hooks/useAmap'
useAmap('mapCom1')
</script>
<style scope lang="less">
#mapCom1{
    width: 90%;
    height: 90%;
}
</style>