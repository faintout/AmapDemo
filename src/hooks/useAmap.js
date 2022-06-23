//高德地图AmapHooks
import { reactive, onMounted, onBeforeUnmount, toRefs,nextTick} from 'vue'
import AMapLoader from "@amap/amap-jsapi-loader";
export default function (mapId) {
    const state = reactive({
        map:null,
        loca:null,
        AMap:null,
        gl:null,
    })

    onMounted(() => {
        nextTick(()=>{
            initMap()
        })
    })

    const initMap = ()=>{
        AMapLoader.load({
         key: '	faca33548d961437ffe3fbb3fa56eb7e', // 申请好的Web端开发者Key，首次调用 load 时必填
         version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
         plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
         Loca: {
           version: "2.0.0",
         },
         AMapUI: {
           version: "1.1",
         },
       }).then((AMap) => {
         state.AMap = AMap;
         state.map = new AMap.Map(mapId, {
             pitch: 70, // 地图俯仰角度，有效范围 0 度- 83 度
             viewMode: "3D", //是否为3D地图模式
             zoom: 16.8, //初始化地图级别
             center: [116.328812,39.865056], //初始化地图中心点位置
             mapStyle: "amap://styles/2f2bda4b006ce570a218fa0390d3f96d"
         });
         state.loca = new Loca.Container({
           map: state.map,
         });
         var canvas = document.querySelector(`#${mapId} .amap-maps .amap-layers canvas`)
         state.gl = canvas.getContext('webgl');

       }).catch((e) => {
         console.log(e);
       });
    }

    //在隐藏之前调用 卸载之前
    onBeforeUnmount(() => {
        //please implement destroy for LayerRender
        state.map.remove(state.map.getLayers(),state.map.getAllOverlays())
        state.map&&state.map.destroy()
        state.map = null
        state.gl.getExtension('WEBGL_lose_context').loseContext();
    })

    return {
        ...toRefs(state),
    }
}