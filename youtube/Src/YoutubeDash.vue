<template>
    
    <div class="youtubedash__wrapper">

<Finder @handleSearchResults=handleSearchResults></Finder>

<div v-if="!loading">
    <videoGroup :videos="this.videos"></videoGroup>
</div>
<div v-if="loading">Loading....</div>

</div>
    
</template>

<script>
import videoGroup from './VideoGroup.vue';
import videoItem from './VideoItem.vue';
import Search from './search.js';
import Finder from './Finder.vue';

import { store} from './store.js'
import {mapState} from "vuex"
import {mapMutations} from "vuex"




export default {

components:{
videoGroup,Finder
},
store,

created(){
Search({
apikey:'AIzaSyDHAbaGJU28IscekFslIDjkuGZGiCEIJQE',
term:this.$route.params.video,
items:10
}, response => this.handleSearchResults(response)); 

 },
 computed:{
             ...mapState([
                 'videos'
             ])
 },

data(){
return{

}
},

methods:{
handleSearchResults(result){
this.loading=false;
this.setVideos(result)
},
        ...mapMutations([
            'setVideos'
        ])
}
}

</script>
<style>
    .youtubedash__wrapper{
           
             width:80%;
          margin:auto;
            
    }
  </style>  