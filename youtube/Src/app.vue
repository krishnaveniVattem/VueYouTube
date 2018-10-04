<template>
<div>
    <router-view :key="$route.fullPath"></router-view>

</div>

</template>
<script>
import  YDash from './YoutubeDash.vue';
import  VideoDetail from './VideoDetails.vue';
export default {
  components:{
    YDash,
     VideoDetail
}
}
</script>
