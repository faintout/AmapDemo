
<template>
    <div class="nav">
        <router-link to="/map1">map1</router-link>
        <router-link to="/map2">map2</router-link>
        <router-link to="/map3">map3</router-link>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    toRefs,
    onMounted,
    onUnmounted,
} from "vue";
import { useRouter} from 'vue-router'
export default defineComponent({
    name: "",
    components: {},
    setup(props, context) {
        const router = useRouter()
        const num = ref(0)
        onMounted(() => {
            
            // setInterval(()=>{
            //     router.push(location.hash.includes('/map2')?'/map1':'/map2')
            //     console.log(++num.value);
            // },2000)
        });
        onUnmounted(() => {

        });
        return {
        };
    },
});
</script>
<style lang="less">

</style>