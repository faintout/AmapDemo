
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
export default defineComponent({
    name: "",
    components: {},
    setup(props, context) {

        onMounted(() => {

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