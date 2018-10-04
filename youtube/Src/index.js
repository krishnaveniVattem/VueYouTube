import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex'       
import VueRouter from 'vue-router';
import YoutubeDash from './YoutubeDash.vue';
import videoItem from './VideoItem.vue';
import VideoDetail from './VideoDetails.vue';
import VueDebounce from 'vue-debounce'
Vue.use(VueRouter);
Vue.use(VueDebounce);
Vue.use(Vuex);





const routes = [
    {path: '/', component: YoutubeDash, name: 'youtube-dash'},
    {path: '/video/:id', component: VideoDetail, name: 'youtubevideo'}
];

const router = new VueRouter({
    routes
});
new Vue({
    router,
    el: '#root',   
    
   data () {
    return {
      info: null
    }
  },
 
    render: h => h(App)
})