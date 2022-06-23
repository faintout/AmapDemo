<template>
   <div id="layout">
        <div class="header">
            <v-header></v-header>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import vHeader from "@/components/header/header.vue"
import { defineComponent,ref } from 'vue'
export default defineComponent({
   name:'layout',
   components:{
       vHeader,
   },
   setup(props,context){

   }
})
</script>
<style lang="less">
    // @import "@/assets/css/main.less";
</style>